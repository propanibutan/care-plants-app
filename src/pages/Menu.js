import React from 'react';
import LogOut from '../components/LogOut';
import { Container, Typography, Paper, Grid, Button, Box, CssBaseline, AppBar, Toolbar, Fab, useScrollTrigger, Zoom, createTheme, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png';
import sadface from '../assets/sadface.png';
import plusplant from '../assets/plant-tree.png';

//Here is my style file for menu page

//functions for scrolling top button
const useStyles = createTheme(theme => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100
    });
  
    const handleClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#top"
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }


export default function Menu({ signedInUser }) {

        return  <Container maxWidth='xl' sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="center" direction="column" sx={{ minHeight: '100vh' }}>
                        <Paper container spacing={4} elevation={3} sx={{ backgroundColor: '#c2f2ff'}} > 
                            <Grid item display="flex" justifyContent="center">
                                <img src={logo} alt="Logo with name Plant Care App" sx={{ maxWidth: '200px' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>Welcome in your garden!</Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Button variant="contained" sx={{m:1}}>Check your plantbase</Button>
                                <Button variant="contained" sx={{m:1}}>Make a new addnotation in calendar</Button>
                            </Grid>
                            <Grid item display="flex" justifyContent="center" sx={{m:5}}>
                                <img src={sadface} alt="Crying face" width="100px" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 1 }}>You haven't any plants!</Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Button href="/addplant" variant="contained" size="small">
                                    <Tooltip title="Add plant"><img src={plusplant} alt="Button with adding plant to base" width="42px" /></Tooltip>
                                </Button>
                            </Grid>
                            <Grid item position="relative">
                                <CssBaseline />
                                <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0, borderRadius: '30px 30px 0 0' }}>
                                    <Toolbar>
                                        <ScrollTop>
                                            <Fab color="secondary" size="small">
                                                <KeyboardArrowUpIcon />
                                            </Fab>
                                        </ScrollTop>
                                    </Toolbar>
                                </AppBar>
                                <Toolbar id="top" />




                                
                                <Container>
                                    <Box my={2}>
                                    {[...new Array(100)]
                                        .map(() => `Lorem ipsum dolor sit amet`)
                                        .join("n")}
                                    </Box>
                                </Container>
                            </Grid>
                        

                            <Grid item>
                                <LogOut />
                                <Typography variant="body2">User Logged in: </Typography>
                                {signedInUser?.email}
                            </Grid>
                        </ Paper> 
                    </Grid>
                </Container>
}