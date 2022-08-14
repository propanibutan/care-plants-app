import React from 'react';
import { 
    Container, 
    Grid, 
    Fab, 
    Typography, 
    Box, 
    TextField, 
    Checkbox, 
    FormControlLabel, 
    Button,
    Paper
} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png'

//Here is my sign up page

export default function SignUpForm({ register, setRegisterEmail, setRegisterPassword }){

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
                        <Fab href="/login" size="small" color="primary" aria-label="exit" sx={{m:2}}>
                            <ArrowBackIosNewRoundedIcon />
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
                        <Typography variant='h6' sx={{ textAlign: 'center', mb:1, fontFamily:'Bungee' }} color="primary">You can sign up:</Typography>
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
                        onClick={register}
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
                            <Button variant="contained">Sign up</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}