import { Typography } from '@mui/material';
import React from 'react'

export default function PlantView({ plant: { id, name, light, water, temperature, humidity, ground, note }}) {
    return (  
        <div>
            <Typography variant='subtitle1'>{name}</Typography> 
            <Typography variant='body2'>Light: {light}</Typography> 
            <Typography variant='body2'>Watering: {water}</Typography>
            <Typography variant='body2'>Temperature: {temperature} </Typography>
            <Typography variant='body2'>Humidity: {humidity}</Typography>
            <Typography variant='body2'>Ground: {ground}</Typography> 
            <Typography variant='body2'>Notes: {note}</Typography>
        </div>
    );
}