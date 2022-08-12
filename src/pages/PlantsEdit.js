// import React from 'react';
// import AccountMenu from '../utils/AccountMenu';
// import ScrollingTopButton from '../utils/ScrollingTopButton';
// import { 
//     Container, 
//     Typography, 
//     Paper, Grid, 
//     CssBaseline, 
//     AppBar, 
//     Toolbar, 
//     Fab, 
//     Tooltip,
//     Box,
//     TextField,
//     IconButton,
//     Button
// } from '@mui/material';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import SendIcon from '@mui/icons-material/Send';
// import logo from '../assets/6a8834e04b1a49a38bf2313df14897b41.png';
// import iconplantbase from '../assets/plant-pot.png';
// import iconcalendar from '../assets/calendar.png';
// import iconresearch from '../assets/research.png';

// //Here is my file for plant add page

// export default function PlantsEdit() {
//     return  (
//         <Container maxWidth='xs' sx={{ flexGrow: 1 }}>
//             <Paper elevation={3} sx={{ backgroundColor: '#c2f2ff', pt:1}}>
//                 <Grid 
//                 position="relative" 
//                 container 
//                 alignItems="center" 
//                 direction="column" 
//                 sx={{ minHeight: '100vh' }}
//                 >
//                     <Grid item display='flex' sx={{ width: 'inherit' }}>
//                         <Fab 
//                         href="/menu" 
//                         size="small" 
//                         color="primary" 
//                         aria-label="exit" 
//                         sx={{m:2}}
//                         >
//                             <CloseRoundedIcon />
//                         </Fab>
//                         <Box sx={{display: "flex", ml:3 }}>
//                             <img 
//                             src={logo} 
//                             alt="Logo with name Plant Care App"
//                             sx={{ maxWidth: '200px' }} 
//                             />
//                         </Box>
//                     </Grid>
//                     <Grid item>
//                         <Typography 
//                         variant="h5" 
//                         sx={{ textAlign: 'center', m: 2 }}
//                         >
//                         Add new plant to your collection
//                         </Typography>
//                     </Grid>
//                     <Grid item>
//                         <Box
//                         component="form"
//                         sx={{
//                             '& > :not(style)': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                         display='flex'
//                         flexDirection="column"
//                         onClick={}
//                             <Box>
//                                 <IconButton color="primary" aria-label="upload picture" component="label">
//                                     <input hidden accept="image/*" type="file" />
//                                     <Tooltip title="Add plant photo" arrow><PhotoCamera /></Tooltip>
//                                 </IconButton>
//                             </Box>
//                             <TextField 
//                             required 
//                             id="filled-basic" 
//                             label="Plant name" 
//                             variant="filled" 
//                             onChange={} 
//                             />
//                             <TextField 
//                             id="filled-basic" 
//                             label="Light" 
//                             variant="filled" 
//                             onChange={} 
//                             />
//                             <TextField 
//                             id="filled-basic" 
//                             label="Watering" 
//                             variant="filled" 
//                             onChange={} 
//                             />
//                             <Box display="flex">
//                                 <TextField 
//                                 id="filled-number" 
//                                 label="Temp" 
//                                 variant="filled" 
//                                 type="number" 
//                                 InputLabelProps={{shrink: true}}
//                                 sx={{mr: 2}}
//                                 onChange={}
//                                 />
//                                 <TextField 
//                                 id="filled-number" 
//                                 label="Humidity" 
//                                 variant="filled" 
//                                 type="number"  
//                                 InputLabelProps={{shrink: true}}
//                                 onChange={} 
//                                 />
//                             </Box>
//                             <TextField 
//                             id="filled-basic" 
//                             label="Type of ground" 
//                             variant="filled" 
//                             onChange={} 
//                             />
//                             <TextField
//                             id="filled-multiline-static"
//                             label="Your notes"
//                             multiline
//                             rows={4}
//                             variant="filled"
//                             onChange={} 
//                             />
//                             <Button sx={{alignSelf: "center"}} variant="contained" endIcon={<SendIcon />}>
//                                 Add plant
//                             </Button>
//                         </Box>
                        
//                     </Grid>

//                     <Grid item sx={{mt: 3, width: 'inherit'}}>
//                         <CssBaseline />
//                         <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0, borderRadius: '30px 30px 0 0' }}>
//                             <Toolbar 
//                             sx={{ 
//                             display:'flex', 
//                             justifyContent:{ xs:'space-evenly', xl:'center'}, 
//                             gap:{ xl:4 },
//                             mb:1
//                              }}
//                             >
//                                 <AccountMenu />
//                                 <Fab href="/plantsbase" color="secondary" size="small">
//                                     <Tooltip title="Plants Database" arrow><img src={iconplantbase} alt="Database icon" width="42px" /></Tooltip>
//                                 </Fab>
//                                 <ScrollingTopButton />
//                                 <Fab href="/calendar" color="secondary" size="small">
//                                     <Tooltip title="Plants Calendar" arrow><img src={iconcalendar} alt="Calendar icon" width="42px" /></Tooltip>
//                                 </Fab>
//                                 <Fab color="secondary" size="small">
//                                     <Tooltip title="Search New Plant" arrow><img src={iconresearch} alt="Search icon" width="42px" /></Tooltip>
//                                 </Fab>
//                             </Toolbar>
//                         </AppBar>
//                         <Toolbar id="top" />
//                     </Grid>
//                 </Grid>
//             </ Paper> 
//         </Container>
//     );
// }