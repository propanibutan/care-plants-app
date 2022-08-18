import React, { useState } from 'react';
import SignInput from '../utils/SignInput';
import { signValidation } from '../utils/signValidation';
import { 
    Container, 
    Grid, 
    Fab, 
    Typography, 
    Box,  
    Checkbox, 
    Link, 
    FormControlLabel, 
    Button, 
    Paper 
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png'

//Here is my LogIn page + we take raw data and sending them to validation before setting on firebase

export default function LogInForm({ generalError, onSubmit }){
    const [values, setValues] = useState({ email:'', password:'' })
    const [errorMessages, setErrorMessages] = useState(null); 

    function handleChange(event) {
        const { name, value } = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errorMessages = signValidation(values);
        setErrorMessages(errorMessages);

        if (errorMessages) { return; }

        if (typeof onSubmit === 'function') {
            onSubmit(values);
        }
    }

    return (
        <Container maxWidth='xs' sx={{ flexGrow: 1 }}>
            <Paper  elevation={3} sx={{ backgroundColor: '#c2f2ff', pt: 1}}> 
                <Grid 
                container 
                alignItems="center"  
                direction="column" 
                sx={{ minHeight: '100vh' }}
                >
                    <Grid item display='flex' sx={{ width: 'inherit' }}>
                        <Fab href="/" size="small" color="primary" aria-label="exit" sx={{m:2}}>
                            <CloseRoundedIcon />
                        </Fab>
                        <Box sx={{display: "flex", ml:3 }}>
                        <img 
                        src={logo} 
                        alt="Logo with name Plant Care App"
                        sx={{ maxWidth: '200px' }} 
                        />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' sx={{ textAlign: 'center', mb:1, fontFamily:'Bungee' }} color="primary">You can login:</Typography>
                        <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        display='flex'
                        flexDirection="column"
                        onSubmit={handleSubmit}
                        >
                            {generalError && ( <Typography variant="subtitle2" sx={{color: 'red'}}>Incorrect e-mail or password.</Typography> )}
                            <SignInput 
                            label="E-mail"
                            name="email"
                            type="text"
                            value={values.email}
                            errorMessage={errorMessages?.email}
                            onChange={handleChange}
                            />
                            <SignInput 
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            errorMessage={errorMessages?.password}
                            onChange={handleChange}
                            />
                            <FormControlLabel control={<Checkbox />} label="Remember Me" />
                            <Link href="/recoveryPassword" variant="body2">Recovery Password</Link>
                            <Button variant="contained" type="submit">Login</Button>
                        </Box>
                    </Grid>
                    <Grid item sx={{mt:2}}>
                        <Link href="/signup" variant="body2">Are you here first time? Sign Up!</Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}