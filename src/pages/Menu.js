import React from 'react';
import LogOut from '../components/LogOut';
import { Container, Typography, Paper, Grid, Button, Box } from '@mui/material';
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png';
import sadface from '../assets/sadface.png';
import plusplant from '../assets/plant-tree.png';

export default function Menu({ signedInUser }) {

        return  <Container maxWidth='xl' sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="center" direction="column" sx={{ minHeight: '100vh' }}>
                        <Paper container spacing={4} elevation={3} sx={{ backgroundColor: '#c2f2ff'}} > 
                            <Grid item display="flex" justifyContent="center">
                                <img src={logo} alt="Logo with name Plant Care App" sx={{ maxWidth: '200px' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>Welcome in your garden!</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" sx={{m:1}}>Check your plantbase</Button>
                                <Button variant="contained" sx={{m:1}}>Make a new addnotation in calendar</Button>
                            </Grid>
                            <Grid item display="flex" justifyContent="center" sx={{m:2}}>
                                <img src={sadface} alt="Crying face" width="100px" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 1 }}>You haven't any plants!</Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Button href="/addplant">
                                    <img src={plusplant} alt="Button with adding plant to base" width="50px" />
                                </Button>
                            </Grid>
                            <Box item>

                            </Box>
                        

                            <Grid item>
                                <LogOut />
                                <Typography variant="body2">User Logged in: </Typography>
                                {signedInUser?.email}
                            </Grid>
                        </ Paper> 
                    </Grid>
                </Container>
}