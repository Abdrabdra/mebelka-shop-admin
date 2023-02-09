// import {useField} from "formik";
// import React from "react";
//
// type Props = {
//     label:string
// }
//
// export const MyTextInput:React.FC<Props> = ({ label, ...props }) => {
//     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//     // which we can spread on <input>. We can use field meta to show an error
//     // message if the field is invalid and it has been touched (i.e. visited)
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

// import React, { FC } from "react";
// import { FieldProps } from "formik";
//
// interface CustomInputProps{
//     type?: string;
// }
//
// const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({
//                                                                      field, // { name, value, onChange, onBlur }
//                                                                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//                                                                      type = "text",
//                                                                      ...props
//                                                                  }) => (
//     <div>
//         <input type={type} {...field} {...props} />
//         {touched[field.name] &&
//             errors[field.name] && <div className="error">{errors[field.name]}</div>}
//     </div>
// );


import React from 'react'
import { FieldProps, getIn } from 'formik'
import {TextField, TextFieldProps} from "@mui/material";


export const AppTextField: React.FC<FieldProps & TextFieldProps> = props => {
    const isTouched = getIn(props.form.touched, props.field.name)
    const errorMessage = getIn(props.form.errors, props.field.name)

    const { error, helperText, field, form, ...rest } = props

    return (
        <TextField
            error={error ?? Boolean(isTouched && errorMessage)}
            helperText={helperText ?? ((isTouched && errorMessage) ? errorMessage : undefined)}
            {...rest} // includes any Material-UI specific props
            {...field} // includes all props contributed by the Formik Field/FastField
        />
    )
}
