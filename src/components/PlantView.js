import React from 'react'

export default function PlantView({ plant: { id, name, light, water, temperature, humidity, ground, note }}) {
    return (  
        <div>
            <strong>{name}</strong> ({light}, {water}, {temperature}, {humidity}, {ground}, {note})
        </div>
    );
}