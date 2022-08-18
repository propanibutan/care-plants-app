import React, { useEffect, useState } from 'react';
import {
    Typography, 
    Grid, 
    Button
} from '@mui/material';
import sadface from '../assets/sadface.png';
import AddPlantButton from '../utils/AddPlantButton';
import PlantsBaseMainList from './PlantsBaseMainList';

//Here is my file for menu page

export default function Menu({handleClickAdd, handleClickBase, plants}) {
    const [isShown, setIsShown] = useState(false);
    console.log('plants Menu', plants, isShown)

    let plants;
    useEffect(() => {
        function showBase(){
       if (plants.length > 0 ){
        setIsShown(true);
    }}
    showBase();
    }, [])

    return  (
        <>
            <Grid item>
                <Typography variant="h6" sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} color="primary">Welcome in your garden!</Typography>
            </Grid>
            <Grid item display="flex" justifyContent="center">
                <Button variant="contained" size="small" sx={{m:1}} onClick={handleClickBase}>Check your plantbase</Button>
                <Button variant="contained" size="small" sx={{m:1}}>Make a new addnotation in calendar</Button>
             </Grid>
            {isShown === false  
            ? <>
            <Grid item display="flex" justifyContent="center" sx={{m:5}}>
                <img src={sadface} alt="Crying face" width="100px" />
            </Grid>
            <Grid item>
                <Typography variant="h7" sx={{ textAlign: 'center', m: 1, fontFamily:'Bungee' }} color="primary">You haven't any plants!</Typography>
            </Grid>
            </>
            : <PlantsBaseMainList plants={plants}/>
            }
            <AddPlantButton handleClickAdd={handleClickAdd}/>
        </>   
    );
}