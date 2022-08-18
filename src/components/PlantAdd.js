import React from 'react';
import PlantForm from './PlantForm';
import {
    Grid,
    Typography
} from '@mui/material'

//Here is my file for plant add page

const INITIAL_VALUES = { id:'', name:'', light:'', water:'', temperature:'', humidity:'', ground:'', note:'' }

export default function AddPlant({ onSubmit }) {
    return(
        <>
            <Grid item>
                <Typography 
                variant="h6" 
                sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} 
                color="primary"
                >
                Add new plant to your collection
                </Typography>
            </Grid>
            <PlantForm plant={INITIAL_VALUES} submitLabel="Add" onSubmit={onSubmit} />
        </>
    );
}