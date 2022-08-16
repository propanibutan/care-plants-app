import React, { useEffect, useState } from 'react';
import Plant from './Plant';
import PlantAdd from './PlantAdd';
import * as API from './api/plants';

export default function PlantsManager() {
    const [plants, setPlants] = useState(null);

    useEffect(() => {
        loadPlants();
    }, []);

    function loadPlants() {
        API.getPlants()
        .then(setPlants);
    }

    function addPlant(plant) {
        API.createPlant(plant)
        .then(plant => setPlants(plants => [...plants, plant]));
    }

    function updatePlant(id, plant) {
        API.updatePlant(id, plant)
        .then(updatedPlant => setPlants(plants => plants.map( plant => plant.id === id ? updatedPlant : plant)));
    }

    function deletePlant(id) {
        API.deletePlant(id)
        .then(() => setPlants(plants => plants.filter(plant => plant.id !== id)));
    }

    if (!plants) return null;

    return (
        <div>
            <ul>
                {plants.map(plant => (
                    <li key={plant.id}>
                        <Plant plant={plant} onUpdate={updatePlant} onDelete={deletePlant} />
                    </li>
                ))}
            </ul>
            <div>
                <PlantAdd onSubmit={addPlant} />
            </div>
        </div>
    );
}