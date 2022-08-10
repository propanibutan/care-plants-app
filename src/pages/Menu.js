import React from 'react';
import LogOut from '../components/LogOut';
import Home from './Home';
import { Container, Typography } from '@mui/material';



export default function Menu({ signedInUser }) {
    console.log(signedInUser);

        if (signedInUser !== undefined) {
        return  <Container maxWidth='xl' sx={{ backgroundColor: '#c2f2ff', flexGrow: 1 }}>
                    <Typography>User Logged in: </Typography>
                    {signedInUser?.email}
                    <LogOut />
                </Container>
        } else {
        return <Home />}
}