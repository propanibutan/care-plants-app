import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { arrayUnion, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import MenuMain from '../pages/MenuMain';

export default function PlantsManager({uidUser}) {
    const [plants, setPlants] = useState([]);
    const usersCollectionRef = doc(db, `users`, `${uidUser}`);
   
    // getting plants data
    useEffect(() => {
        const getPlants = async () => {
        const data = await getDoc(usersCollectionRef);
        
        if (uidUser !== null) {
        const takeArray = data.data();
        const array = Object.keys(takeArray).map(function(key) {return takeArray[key]})
        const arraInside = array[0];

        setPlants(arraInside);
        }
       }

    getPlants();
    }, [])
    console.log('uid', uidUser);

    //adding plants
    const addPlants = async (plant) => {
        await setDoc(usersCollectionRef, { 
         plants: arrayUnion(plant),
        }, 
        { merge: true }
        );
        setPlants(plants => [...plants, plant]);
    };
    
    //edit plant
    const updatePlant = async (id, plant) => {
        const plantDoc = doc(db, `users`, `${uidUser}`, `plants`)
        await updateDoc(plantDoc, plant)
        .then(updatedPlant => setPlants(plants => plants.map( plant => plant.id === id ? updatedPlant : plant)));
    }

    //delete plant
    const deletePlant = async (id) => {
        const plantDoc = doc(db, `users`, `${uidUser}`, `plants`, id);
        await deleteDoc(plantDoc)
        .then(() => setPlants(plants => plants.filter(plant => plant.id !== id)));
    }

    return (
        <MenuMain addPlants={addPlants} plants={plants} updatePlant={updatePlant} deletePlant={deletePlant}/>
    );
}