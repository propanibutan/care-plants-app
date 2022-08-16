import React from 'react';
import PlantForm from './PlantForm';

const INITIAL_VALUES = { name:'', light:'', water:'', temperature:'', humidity:'', ground:'', note:'' }

export default function AddPlant({ onSubmit }) {
    return(
        <div>
            <h3>Add plant</h3>
            <PlantForm plant={INITIAL_VALUES} submitLabel="Add" onSubmit={onSubmit} />
        </div>
    );
}