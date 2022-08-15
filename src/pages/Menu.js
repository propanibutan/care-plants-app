import React from 'react';
import {
    Typography, 
    Grid, 
    Button,  
    Tooltip, 
} from '@mui/material';
import sadface from '../assets/sadface.png';
import plusplant from '../assets/plant-tree.png';

//Here is my file for menu page

export default function Menu({handleClickAdd, handleClickBase}) {

    return  (
        <>
            <Grid item>
                <Typography variant="h6" sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} color="primary">Welcome in your garden!</Typography>
            </Grid>
            <Grid item display="flex" justifyContent="center">
                <Button variant="contained" size="small" sx={{m:1}} onClick={handleClickBase}>Check your plantbase</Button>
                <Button variant="contained" size="small" sx={{m:1}}>Make a new addnotation in calendar</Button>
             </Grid>
            <Grid item display="flex" justifyContent="center" sx={{m:5}}>
                <img src={sadface} alt="Crying face" width="100px" />
            </Grid>
            <Grid item>
                <Typography variant="h7" sx={{ textAlign: 'center', m: 1, fontFamily:'Bungee' }} color="primary">You haven't any plants!</Typography>
            </Grid>
            <Grid item display="flex" justifyContent="center">
                <Button onClick={handleClickAdd} variant="contained" size="small" sx={{m: 2}}>
                    <Tooltip title="Add plant" arrow><img src={plusplant} alt="Button with adding plant to base" width="42px" /></Tooltip>
                </Button>
            </Grid>
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