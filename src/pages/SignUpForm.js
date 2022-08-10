import React from 'react';
import { Container, Grid, Fab, Typography, Box, TextField, Checkbox, Link, FormControlLabel, Button } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png'

//Here is my sign up page

export default function SignUpForm({ register, setRegisterEmail, setRegisterPassword }){

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
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>You can sign up:</Typography>
                </Grid>
                <Grid item>
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
                        <TextField 
                         id="outlined-basic" 
                         label="E-mail" 
                         variant="outlined"
                         onChange={(event) => {
                             setRegisterEmail(event.target.value);
                         }} 
                        />
                        <TextField
                         id="outlined-basic"
                         label="Password"
                         type="password" 
                         onChange={(event) => {
                             setRegisterPassword(event.target.value);
                         }} 
                        />
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                        <Button href="/menu" variant="contained" type="submit" onClick={register}>Sign up</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}