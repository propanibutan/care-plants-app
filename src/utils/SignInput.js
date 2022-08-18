import { TextField } from '@mui/material';
import React from 'react'

//Single input field for sign
export default function SignInput({ 
    label, 
    name, 
    type, 
    value, 
    errorMessage,
    onChange 
}) {
    function handleChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <TextField 
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        type={type}
        value={value.trim()}
        onChange={handleChange}
        error={ !!errorMessage }
        helperText={errorMessage}
        />
    );
}