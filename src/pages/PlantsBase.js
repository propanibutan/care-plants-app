import React from 'react';
import { 
    List,
    ListItemButton,
    ListItemAvatar,
    Grid, 
    Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddPlantButton from '../utils/AddPlantButton';
import Plant from '../components/Plant';

//Here is my file for plant add page
export default function PlantsBase({plants, handleClickAdd, updatePlant, deletePlant}) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

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
                <List component="nav" aria-label="main plants base">
                    {plants && plants.map((plant, i) => {
                        return (
                            <ListItemButton
                                sx={{bgcolor: 'background.paper'}}
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <ListItemAvatar><FolderIcon /></ListItemAvatar>
                                <Plant key={i} plant={plant} onUpdate={updatePlant} onDelete={deletePlant} />
                            </ListItemButton>
                       )
                    })}
                </List>
            </Grid>
            <AddPlantButton handleClickAdd={handleClickAdd} />
       </>             
    );
}