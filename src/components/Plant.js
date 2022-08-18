import React, { useState } from 'react';
import  { Box, IconButton } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import PlantEdit from './PlantEdit';
import PlantView from './PlantView';

export default function Plant({ plant, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditButtonClick() {
        setIsEditing(true);
    }

    function handleUpdate(editedPlant) {
        if (typeof onUpdate !== 'function') return;
        setIsEditing(false);
        onUpdate(plant.id, editedPlant);
    }

    function handleDeleteButtonClick() {
        if (typeof onDelete !== 'function') return;
        onDelete(plant.id);
    }

    return (
        <div>
            {isEditing
            ? (
                <div>
                    <PlantEdit plant={plant} onSubmit={handleUpdate} />
                </div>
            )
            : (
                <>
                    <div><PlantView plant={plant} /></div>
                    <Box>
                        <IconButton color="secondary" aria-label="edit" onClick={handleEditButtonClick}>
                            <EditRoundedIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={handleDeleteButtonClick}>
                            <DeleteIcon />
                        </IconButton>
                    </Box> 
                </>
            )
            }
        </div>
    );
}