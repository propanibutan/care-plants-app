import React, { useState } from 'react';
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
                    <button onClick={handleEditButtonClick}>Edit</button>
                    <button onClick={handleDeleteButtonClick}>Delete</button>
                </>
            )
            }
        </div>
    );
}