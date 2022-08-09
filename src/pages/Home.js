import React from 'react';
import { Container, Grid, Button, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/logo-photo2.png'

// Here is landing page for my web app

export default function Home(){
    return (
        <Container maxWidth='lg' sx={{ height: '100vh', width:'100vw', backgroundColor: '#c2f2ff' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center"  direction="column" sx={{ minHeight: '100vh', gridTemplateRows: 'repeat(2)', rowGap: 3 }}>
                <Grid item sx={{ display: 'flex', alignItems:'center' }}>
                    <Typography sx={{ 
                        fontFamily: 'Mouse Memoirs', 
                        letterSpacing: '1px', 
                        color:'#e7a81c', 
                        textAlign:'right', 
                        alignSelf: 'center', 
                        textShadow:'2px 4px 3px #5a402c', 
                        mr: 1 
                        }} variant='h3'>
                        Take care about your plants.
                    </Typography>
                    <Tooltip title="by catalyststuff"><img src={logo} alt="Logo girl by catalyststuff" style={{ maxWidth: '150px' }} /></Tooltip>
                </Grid>
                <Grid item>
                    <Button href="#" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />}>Start now!</Button>
                </Grid>
                <Grid item>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant='subtitle1' sx={{ color:'#390277', fontWeight: '700'}}>About App</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
    );
}