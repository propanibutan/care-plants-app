import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function PlantsBase(){
    const [newName, setNewName] = useState("");
    const [newTemp, setNewTemp] = useState(0);

    const [plants, setPlants] = useState([]);
    const plantsCollectionRef = collection(db, "plants")

    const createPlant = async () => {
        await addDoc(plantsCollectionRef, { name: newName, temp: newTemp });
    };

    useEffect(() => {

        const getPlants = async () => {
            const data = await getDocs(plantsCollectionRef); //zwraca wszystkie elementy kolekcji
            setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id }))); //return obiekt z plants, ale nie zawiera id
        };

        getPlants();
    }, [])

    return (
        <div>
            <input 
            placeholder="Name" 
            onChange={(event) => {
                setNewName(event.target.value);
            }} 
            />
            <input placeholder="Temp" onChange={(event) => {setNewTemp(event.target.value)}} type="number"/>
            <button onClick={createPlant}>Create plant</button>
            {plants.map((plant) => { 
                return (
                <div>
                    <h1>Name: {plant.name}</h1>
                </div>)
            })}
        </div>
    )
}