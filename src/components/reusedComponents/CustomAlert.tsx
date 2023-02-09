import * as React from 'react';
import Alert from '@mui/material/Alert';
import {AlertTitle} from "@mui/material";

type PropsType = {
    title: string,
    message: string,
    status: 'success' | 'info' | 'warning' | 'error',
}

const CustomAlert: React.FC<PropsType> = ({message, status, title}) => {
    return (
        <Alert severity={status}>
            <AlertTitle>{title}</AlertTitle>
            <strong>{message}</strong>
        </Alert>
    );
};

export default CustomAlert;