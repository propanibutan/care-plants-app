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

    useEffect(() => {
       if (plants.length > 0 ){
        setIsShown(true);
    }
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

{/*MIEJSCE NA ŚMIECI */}
{/* <Box >
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box> */}
 {/* <Grid item>
                                <Typography variant="body2">User Logged in: </Typography>
                                console.log({signedInUser?.email})
                            </Grid> */}
{/*MIEJSCE NA ŚMIECI */}