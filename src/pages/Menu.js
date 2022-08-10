import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

export default function Menu() {

    return (
        <Container>
            <p>User Logged in:</p>
            <Button href='/logout'>Sign out</Button>
        </Container>
    );
}