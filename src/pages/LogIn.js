import React from 'react';
import { Container, Grid, Fab } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function LogIn(){
    return (
        <Container maxWidth='xl' sx={{ height: '100vh', backgroundColor: '#c2f2ff', flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Fab color="primary" aria-label="exit">
                        <CloseRoundedIcon />
                    </Fab>
                    {/* <Item>xs=8</Item>
                    <Item>xs=8</Item> */}
                </Grid>
                <Grid item>
                    {/* <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item> */}
                </Grid>
                <Grid item>
                    {/* <Item>xs=8</Item>
                    <Item>xs=8</Item> */}
                </Grid>
            </Grid>
        </Container>
    );
}