import React from 'react';
import { 
    Paper, 
    Grid, 
    Typography,
    IconButton,
} from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';

//Here is my file for plant add page

export default function PlantsBase({plants}) {
    return  (
                    <Grid item display="flex" flexWrap="wrap">
                        {plants.map((plant) => { 
                            return (
                            <Paper>
                                <Typography>Name: {plant.name}</Typography>
                                <IconButton color="secondary" aria-label="edit">
                                    <EditRoundedIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Paper>)
                        })}
                    </Grid>
    );
}