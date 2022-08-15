import React from 'react';
import {  
    Typography, 
    Grid, 
    Tooltip,
    Box,
    TextField,
    IconButton,
    Button
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

//Here is my file for plant add page

export default function PlantsAdd({
    createPlant, 
    setNewName, 
    setNewLight,
    setNewWatering,
    setNewTemp,
    setNewHumidity,
    setNewGround,
    setNewNote 
}) {
    return  (
        <>
                    <Grid item>
                        <Typography 
                        variant="h6" 
                        sx={{ textAlign: 'center', m: 2, fontFamily:'Bungee' }} 
                        color="primary"
                        >
                        Add new plant to your collection
                        </Typography>
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
                        >
                            <Box>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <Tooltip title="Add plant photo" arrow><PhotoCamera /></Tooltip>
                                </IconButton>
                            </Box>
                            <TextField 
                            required 
                            id="filled-basic" 
                            label="Plant name" 
                            variant="filled" 
                            onChange={(event) => {
                                setNewName(event.target.value);
                            }} 
                            />
                            <TextField 
                            id="filled-basic" 
                            label="Light" 
                            variant="filled" 
                            onChange={(event) => {
                                setNewLight(event.target.value);
                            }} 
                            />
                            <TextField 
                            id="filled-basic" 
                            label="Watering" 
                            variant="filled" 
                            onChange={(event) => {
                                setNewWatering(event.target.value);
                            }} 
                            />
                            <Box display="flex">
                                <TextField 
                                id="filled-number" 
                                label="Temp" 
                                variant="filled" 
                                type="number" 
                                InputLabelProps={{shrink: true}}
                                sx={{mr: 2}}
                                onChange={(event) => {
                                    setNewTemp(event.target.value);
                                }}
                                />
                                <TextField 
                                id="filled-number" 
                                label="Humidity" 
                                variant="filled" 
                                type="number"  
                                InputLabelProps={{shrink: true}}
                                onChange={(event) => {
                                    setNewHumidity(event.target.value);
                                }} 
                                />
                            </Box>
                            <TextField 
                            id="filled-basic" 
                            label="Type of ground" 
                            variant="filled" 
                            onChange={(event) => {
                                setNewGround(event.target.value);
                            }} 
                            />
                            <TextField
                            id="filled-multiline-static"
                            label="Your notes"
                            multiline
                            rows={4}
                            variant="filled"
                            onChange={(event) => {
                                setNewNote(event.target.value);
                            }} 
                            />
                            <Button onClick={createPlant} sx={{alignSelf: "center"}} variant="contained" endIcon={<SendIcon />}>
                                Add plant
                            </Button>
                        </Box> 
                    </Grid>
        </>
    );
}