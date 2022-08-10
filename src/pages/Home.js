import React from 'react';
import { ThemeProvider } from '@mui/material';
import themeHome from '../styles/themeHome';
import { Container, Grid, Button, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import girl from '../assets/logo-photo3.png'
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png'

// Here is landing page for my web app

export default function Home(){
    return (
        <ThemeProvider theme={themeHome}>
            <Container maxWidth='xl' sx={{ backgroundColor: '#c2f2ff', flexGrow: 1 }}>
                <Grid container spacing={3} alignItems="center"  direction="column" sx={{ minHeight: '100vh', gridTemplateRows: 'repeat(2)' }}>
                    <Grid item>
                        <img src={logo} alt="Logo with name Plant Care App" style={{ width: '200px' }} /> 
                    </Grid>
                    <Grid item>
                        <Tooltip title="by catalyststuff"><img src={girl} alt="Girl planting flower by catalyststuff" style={{ maxWidth: '300px' }} /></Tooltip> 
                    </Grid>
                    <Grid item>
                        <Button href="/login" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />}>Start now!</Button>
                    </Grid>
                    <Grid item>
                        <Accordion sx={{ maxWidth: '350px'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography variant='subtitle1' sx={{ color:'#390277', fontWeight: '700'}}>About App</Typography>
                            </AccordionSummary>
                            <AccordionDetails  >
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
                                        <ListItemText>searching plants from external database (soon or never)</ListItemText>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}