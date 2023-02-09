import {FC, useState} from "react";
import {Button, Grid, InputAdornment, Paper} from "@mui/material";
import {Box} from "@mui/system";
import {useFormik} from "formik";

// components
import {StyledInput} from "../../../../components/styled-components/StyledInput";

// icons
import SearchIcon from "@mui/icons-material/Search";
//@ts-ignore
import {ReactComponent as ArrowSvg} from "../../../../assets/svg/Vectorarrowright.svg";

interface Props {
    setQuery: (values: any) => void;
}

const Filter: FC<Props> = ({setQuery}) => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
        },
        onSubmit: (values) => {
            setQuery(values);
        },
    });

    const {values, handleChange, handleSubmit} = formik;

    return (
        <>
            <Paper
                elevation={0}
                sx={{height: "90px", p: "20px", boxSizing: "border-box", mb: "30px"}}
            >
                <Grid container columns={12} spacing={2}>
                    <Grid item xs={10}>
                        <StyledInput
                            variant="outlined"
                            size="small"
                            sx={{
                                backgroundColor: "primary.light",
                            }}
                            placeholder={"Поиск по имени, фамилии, телефону"}
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{color: "primary.main"}}/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            paddingTop: "10px",
                            paddingLeft: "40px",
                            paddingRight: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={() => handleSubmit()}
                            sx={{
                                fontSize: "18px",
                                justifyContent: "space-evenly",
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            Фильтры
                            <Box
                                sx={{
                                    background: "#fff",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "5px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <ArrowSvg/>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Filter;