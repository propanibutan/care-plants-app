import React, { useState } from 'react';
import AccountMenu from '../utils/AccountMenu';
import ScrollingTopButton from '../utils/ScrollingTopButton';
import { 
    Container, 
    Paper, Grid, 
    CssBaseline, 
    AppBar, 
    Toolbar, 
    Fab, 
    Tooltip,
    Box
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png';
import iconplantbase from '../assets/plant-pot.png';
import iconcalendar from '../assets/calendar.png';
import iconresearch from '../assets/research.png';
import Menu from './Menu';
import PlantsManager from '../components/PlantsManager';
import PlantAdd from '../components/PlantAdd';
import PlantsBase from './PlantsBase';

//Here is my file for plant add page

export default function MenuMain({addPlants}) {
    const key = ["menu", "add", "base", "edit"]
    const [isShown, setIsShown] = useState('menu');
    
    const handleClickAdd = (event) => setIsShown(key[1]);
    const handleClickBase = (event) => setIsShown(key[2]);

    return  (
        <Container maxWidth='xs' sx={{ flexGrow: 1 }}>
            <Paper elevation={3} sx={{ backgroundColor: '#c2f2ff', pt:1}}>
                <Grid 
                position="relative" 
                container 
                alignItems="center" 
                direction="column" 
                sx={{ minHeight: '100vh' }}
                >
                    <Grid item display='flex' sx={{ width: 'inherit' }}>
                        {isShown !== "menu" ? <Fab 
                        onClick={() => setIsShown(key[0])} 
                        size="small" 
                        color="primary" 
                        aria-label="exit" 
                        sx={{m:2}}
                        
                        >
                            <CloseRoundedIcon />
                        </Fab> : null}
                        <Box flexGrow={2} display="flex" justifyContent="center">
                            <img 
                            src={logo} 
                            alt="Logo with name Plant Care App"
                            sx={{ maxWidth: '200px' }} 
                            />
                        </Box>
                    </Grid>

                    {isShown === "menu" && (<Menu 
                    handleClickAdd={handleClickAdd}  
                    handleClickBase={handleClickBase}
                    />)}
                    {isShown === "base" && (<PlantsBase 
                    handleClickAdd={handleClickAdd}
                    />)}
                    {isShown === "add" && (<PlantAdd onSubmit={addPlants}/>)}
                    {/* {isShown === "edit" && (< />)} */}

                    <Grid item sx={{mt: 3, width: 'inherit'}}>
                        <CssBaseline />
                        <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0, borderRadius: '30px 30px 0 0' }}>
                            <Toolbar 
                            sx={{ 
                            display:'flex', 
                            justifyContent:{ xs:'space-evenly', xl:'center'}, 
                            gap:{ xl:4 },
                            mb:1
                             }}
                            >
                                <AccountMenu />
                                <Fab color="secondary" size="small" onClick={() => setIsShown(key[2])}>
                                    <Tooltip title="Plants Database" arrow><img src={iconplantbase} alt="Database icon" width="42px" /></Tooltip>
                                </Fab>
                                <ScrollingTopButton />
                                <Fab color="secondary" size="small">
                                    <Tooltip title="Plants Calendar" arrow><img src={iconcalendar} alt="Calendar icon" width="42px" /></Tooltip>
                                </Fab>
                                <Fab color="secondary" size="small">
                                    <Tooltip title="Search New Plant" arrow><img src={iconresearch} alt="Search icon" width="42px" /></Tooltip>
                                </Fab>
                            </Toolbar>
                        </AppBar>
                        <Toolbar id="top" />
                    </Grid>
                </Grid>
            </ Paper> 
        </Container>
    );
}