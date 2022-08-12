import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import PlantsAdd from '../pages/PlantsAdd';

//function which add new plant to base

export default function DataPlantsAdd(){
    const plantsCollectionRef = collection(db, "plants")
    
    const [newName, setNewName] = useState("");
    const [newLight, setNewLight] = useState("");
    const [newWatering, setNewWatering] = useState("");
    const [newTemp, setNewTemp] = useState(0);
    const [newHumidity, setNewHumidity] = useState(0);
    const [newGround, setNewGround] = useState("");
    const [newNote, setNewNote] = useState("");

    const createPlant = async () => {
        await addDoc(plantsCollectionRef, { 
            name: newName,
            light: newLight,
            watering: newWatering,
            temp: newTemp,
            humidity: newHumidity,
            ground: newGround,
            note: newNote
        });
    };

    return (
        <PlantsAdd 
        createPlant={createPlant}
        setNewName={setNewName}
        setNewLight={setNewLight}
        setNewWatering={setNewWatering}
        setNewTemp={setNewTemp}
        setNewHumidity={setNewHumidity}
        setNewGround={setNewGround}
        setNewNote={setNewNote}
        />
    );
}