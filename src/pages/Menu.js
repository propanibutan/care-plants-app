import React from 'react';
import LogOut from '../components/LogOut';
import { Container, Typography } from '@mui/material';

export default function Menu({ signedInUser }) {
    console.log('menu:', signedInUser);

    const loggedUser = signedInUser;
    console.log('menu:', loggedUser);

        return  <Container maxWidth='xl' sx={{ backgroundColor: '#c2f2ff', flexGrow: 1 }}>
                    <Typography>User Logged in: </Typography>
                    {loggedUser?.email}
                    <LogOut />
                </Container>
}