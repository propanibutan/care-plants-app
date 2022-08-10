import { TextField } from '@mui/material';
import React from 'react'

export default function Input({ name, label, value, onChange }) {
    return (
        <TextField 
            id="outlined-basic" 
            label={label} 
            variant="outlined"
            name={name}  
            value={value} 
            onChange={onChange} 
        />
    );
}