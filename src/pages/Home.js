import React from 'react';
import { Container, Grid, Button, Typography, List, ListItem, ListItemAvatar, ListItemText, CardMedia } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import logo from '../assets/logo-girl.jpg'

// Here is landing page for my web app


export default function Home(){
    return (
        <Container maxWidth='xs' sx={{ height: '100vh', backgroundColor: '#0ccbff' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center"  direction="column" sx={{ minHeight: '100vh', gridTemplateRows: 'repeat(2)', rowGap: 3 }}>
                <Grid item sx={{ display: 'flex', alignItems:'center' }}>
                    <Typography sx={{ 
                        fontFamily: 'Mouse Memoirs', 
                        letterSpacing: '1px', 
                        color:'#e1a101', 
                        textAlign:'right', 
                        alignSelf: 'center', 
                        textShadow:'0 3px 6px black', 
                        mr: 1 
                        }} variant='h3'>
                        Take care about your plants.
                    </Typography>
                    <CardMedia><img src={logo} alt="Logo girl" style={{ maxWidth: '150px' }} /></CardMedia>
                </Grid>
                <Grid item>
                    <Button href="#" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />}>Start now!</Button>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' sx={{ color:'#390277', fontWeight: '700'}}>About App</Typography>
                    <Typography variant='body2' sx={{ color:'#390277' }}>My app will help you organize and properly care about your plants. What u can do?</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <YardRoundedIcon />
                            </ListItemAvatar>
                            <ListItemText>make your own base of plants</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <YardRoundedIcon />
                            </ListItemAvatar>
                            <ListItemText>adding and editing plants in your base</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <YardRoundedIcon />
                            </ListItemAvatar>
                            <ListItemText>plan and mark your plant care in calendar (soon)</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <YardRoundedIcon />
                            </ListItemAvatar>
                            <ListItemText>searching plants in external database (soon or never)</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}