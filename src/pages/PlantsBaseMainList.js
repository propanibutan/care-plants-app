import React from 'react'
import { 
    Paper, 
    Grid,
    Typography,
    Avatar 
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export default function PlantsBaseMainList({plants}) {
    return ( 
        <Grid item display="flex" flexWrap="wrap" sx={{m: 2}} justifyContent="center">
            {plants && plants.map((plant, i) => {
                return (
                    <>
                        <Paper key={i} sx={{m:1, width: '100px', height: '150px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                            <Avatar><FolderIcon /></Avatar>
                            <Typography variant='subtitle1' sx={{ml:1}}>{plant.name}</Typography>
                        </Paper>
                    </>
                )
            })}
        </Grid>
    );
}