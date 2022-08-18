import { Typography } from '@mui/material';
import React from 'react';
import PlantForm from './PlantForm';

export default function EditPlant({ plant, onSubmit }) {
    return (
        <div>
            <Typography variant="h6" sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} color="primary">Edit plant</Typography>
            <PlantForm plant={plant} submitLabel="Save" onSubmit={onSubmit} />
        </div>
    );
}