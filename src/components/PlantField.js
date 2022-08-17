import React from 'react'
import { TextField } from '@mui/material';

export default function PlantField({ label, name, type, value, errorMessage, onChange }) {
    function handleChange(event) {
        if (typeof onChange !== 'function') return;
        onChange(event);
    }

    return (
        <label>
            
            <TextField
            id="filled-basic"
            variant="filled"
            label={label} 
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            error={errorMessage ? true : false}
            helperText={errorMessage}
            />
        </label>
    );
}