import React from 'react';
import AccountMenu from '../utils/AccountMenu';
import ScrollingTopButton from '../utils/ScrollingTopButton';
import { ThemeProvider } from '@mui/material';
import themeMenu from '../styles/themeMenu';
import { 
    Container, 
    Typography, 
    Paper, Grid, 
    Button, 
    CssBaseline, 
    AppBar, 
    Toolbar, 
    Fab, 
    Tooltip, 
} from '@mui/material';
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png';
import sadface from '../assets/sadface.png';
import plusplant from '../assets/plant-tree.png';
import iconplantbase from '../assets/plant-pot.png';
import iconcalendar from '../assets/calendar.png';
import iconresearch from '../assets/research.png';

//Here is my file for menu page

export default function Menu({ signedInUser }) {
    return  (
        <ThemeProvider theme={themeMenu}>
            <Container maxWidth='xs' sx={{ flexGrow: 1 }}>
                <Paper elevation={3} sx={{ backgroundColor: '#c2f2ff', pt:1}}>
                    <Grid position="relative" container alignItems="center" direction="column" sx={{ minHeight: '100vh' }}>
                            <Grid item display="flex" justifyContent="center">
                                <img src={logo} alt="Logo with name Plant Care App" sx={{ maxWidth: '200px' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>Welcome in your garden!</Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Button variant="contained" size="small" sx={{m:1}}>Check your plantbase</Button>
                                <Button variant="contained" size="small" sx={{m:1}}>Make a new addnotation in calendar</Button>
                            </Grid>
                            <Grid item display="flex" justifyContent="center" sx={{m:5}}>
                                <img src={sadface} alt="Crying face" width="100px" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 1 }}>You haven't any plants!</Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Button href="/addplant" variant="contained" size="small">
                                    <Tooltip title="Add plant" arrow><img src={plusplant} alt="Button with adding plant to base" width="42px" /></Tooltip>
                                </Button>
                            </Grid>
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
 <Grid item>
                                <Typography variant="body2">User Logged in: </Typography>
                                console.log({signedInUser?.email})
                            </Grid>
{/*MIEJSCE NA ŚMIECI */}
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
                                        <Fab href="/plantsbase" color="secondary" size="small">
                                            <Tooltip title="Plants Database" arrow><img src={iconplantbase} alt="Database icon" width="42px" /></Tooltip>
                                        </Fab>
                                        <ScrollingTopButton />
                                        <Fab href="/calendar" color="secondary" size="small">
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
        </ThemeProvider>
    );
}