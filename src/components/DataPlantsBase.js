import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import PlantsBase from '../pages/PlantsBase';

//Function that is responsible for logic of displaying the database 
export default function DataPlantsBase() {
    const [plants, setPlants] = useState([]);
    const plantsCollectionRef = collection(db, "plants")

    useEffect(() => {

        const getPlants = async () => {
            const data = await getDocs(plantsCollectionRef); //zwraca wszystkie elementy kolekcji
            setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id }))); //return obiekt z plants, ale nie zawiera id
        };

        getPlants();
    }, [])

    

    return (
        <PlantsBase plants={plants} />
    );
}