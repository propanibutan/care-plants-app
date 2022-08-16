import React from 'react';
import PlantForm from './PlantForm';

export default function EditPlant({ plant, onSubmit }) {
    return (
        <div>
            <h3>Edit plant</h3>
            <PlantForm plant={plant} submitLabel="Save" onSubmit={onSubmit} />
        </div>
    );
}