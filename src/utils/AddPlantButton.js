import React from 'react'
import { Grid, Button, Tooltip } from '@mui/material';
import plusplant from '../assets/plant-tree.png';

export default function AddPlantButton({handleClickAdd}){
    return (
        <Grid item display="flex" justifyContent="center">
            <Button onClick={handleClickAdd} variant="contained" size="small" sx={{m: 2}}>
                <Tooltip title="Add plant" arrow><img src={plusplant} alt="Button with adding plant to base" width="42px" /></Tooltip>
            </Button>
        </Grid>
);
}