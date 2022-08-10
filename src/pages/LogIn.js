import React from 'react';
import { Container, Grid, Fab, Typography, Box, TextField, Checkbox, Link, FormControlLabel, Button } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png'

//Here is my LogIn page plus login

export default function LogIn(){
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: '#c2f2ff', flexGrow: 1 }}>
            <Grid container spacing={4} alignItems="center"  direction="column" sx={{ minHeight: '100vh' }}>
                <Grid item>
                    <Fab href="/" size="small" color="primary" aria-label="exit">
                        <CloseRoundedIcon />
                    </Fab>
                    <img src={logo} alt="Logo with name Plant Care App" sx={{ width: '200px' }} /> 
                </Grid>
                <Grid item>
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>Hello Again!</Typography>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    display='flex'
                    flexDirection="column"
                    >
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        <Link href="/recoveryPassword" variant="body2">Recovery Password</Link>
                        <Button variant="contained" type="submit">Login</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Link variant="body2">Are you here first time? Sign Up!</Link>
                </Grid>
            </Grid>
        </Container>
    );
}