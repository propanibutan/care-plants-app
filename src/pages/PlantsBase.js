import React, { useState } from 'react';
import { 
    Paper, 
    Grid, 
    Typography,
    IconButton,
    Box
} from '@mui/material';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';


//Here is my file for plant add page
export default function PlantsBase({plants}) {

//     <div>
//     <ul>
//         {plants.map(plant => (
//             <li key={plant.id}>
//                 <Plant plant={plant}  /> 
//              </li>
//         ))}
//     </ul>
//     <AddPlantButton handleClickAdd={handleClickAdd} />
//     {isShown === true && (<div>
//         <PlantAdd onSubmit={addPlants}/>
//     </div>)}
// </div>


    return  (
        <> 
                    <Grid item>
                        <Typography 
                        variant="h6" 
                        sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} 
                        color="primary"
                        >
                        Plant base
                        </Typography>
                    </Grid>
                    <Grid item display="flex" flexWrap="wrap" sx={{m: 2}} justifyContent="center">
                        {plants.map((plant) => { 
                            return (
                            <> 
                            <Paper sx={{m:1, width: '100px', height: '150px'}}>
                                <img />
                                <Typography variant='subtitle2'>Name: {plant.name}</Typography>
                                <Box>
                                <IconButton color="secondary" aria-label="edit">
                                    <EditRoundedIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                 </Box>   
                            </Paper>
                          </> 
                       )
                     })}
                    </Grid>
       </>             
    );
}