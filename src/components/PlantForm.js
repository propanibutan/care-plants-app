import React, { useState } from 'react';
import PlantField from './PlantField';
import validate from './validatePlantValues';

function mapPlantToFormValues(plant) {
    return {
        name: plant.name,
        light: plant.light,
        water: plant.water,
        temperature: plant.temperature,
        humidity: plant.humidity,
        ground: plant.ground,
        note: plant.note
    };
}

function mapFormValuesToPlant(values) {
    return {
        name: values.name,
        light: values.light,
        water: values.water,
        temperature: values.temperature,
        humidity: values.humidity,
        ground: values.ground,
        note: values.note
    }
}

export default function PlantForm({ plant, submitLabel, onSubmit }) {
    const initialValues = mapPlantToFormValues(plant);

    const [values, setValues] = useState(initialValues);
    const [errorMessages, setErrorMessages] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const errorMessages = validate(values);
        setErrorMessages(errorMessages);
        if (errorMessages) return;

        if (typeof onSubmit !== 'function') return;
        onSubmit(mapFormValuesToPlant(values));
        setValues(initialValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <PlantField 
            label="Name"
            name="name"
            type="text"
            value={values.name}
            errorMessage={errorMessages?.name}
            onChange={handleChange}
            />
            <PlantField 
            label="Light"
            name="light"
            type="text"
            value={values.light}
            errorMessage={errorMessages?.light}
            onChange={handleChange}
            />
            <PlantField 
            label="Watering"
            name="water"
            type="text"
            value={values.water}
            errorMessage={errorMessages?.water}
            onChange={handleChange}
            />
            <PlantField 
            label="Temperature"
            name="temperature"
            type="text"
            value={values.temperature}
            errorMessage={errorMessages?.temperature}
            onChange={handleChange}
            />
            <PlantField 
            label="Humidity"
            name="humidity"
            type="text"
            value={values.humidity}
            errorMessage={errorMessages?.humidity}
            onChange={handleChange}
            />
            <PlantField 
            label="Ground"
            name="ground"
            type="text"
            value={values.ground}
            errorMessage={errorMessages?.ground}
            onChange={handleChange}
            />
            <PlantField 
            label="Notes"
            name="note"
            type="text"
            value={values.note}
            errorMessage={errorMessages?.note}
            onChange={handleChange}
            />
            <input type="submit" value={submitLabel} />
        </form>
    );
}