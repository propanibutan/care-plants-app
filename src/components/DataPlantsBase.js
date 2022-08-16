import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config';
import { doc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import PlantsBase from '../pages/PlantsBase';

//Function that is responsible for logic of displaying the database 
export default function DataPlantsBase() {
    const [plants, setPlants] = useState([]);

    const [uidUser, setUidUser] = useState(null);

    onAuthStateChanged(auth, (currentUser) => { 
        if (currentUser) {
            const uid = currentUser.uid;
            setUidUser(uid);
          }
    });
    const usersCollectionRef = doc(db, "users", `${uidUser}`)
        
    useEffect(() => {

        const getPlants = async () => {
            const data = await getDocs(usersCollectionRef); //zwraca wszystkie elementy kolekcji <<<TUTAJ JEST JAKIS BŁAD Z DEPENDECY
            setPlants(data.docs.map((doc) => ({...doc.data(), id: doc.id }))); //return obiekt z plants, ale nie zawiera id
        };

        getPlants();
    }, [])



    return (
        <PlantsBase plants={plants} />
    );
}