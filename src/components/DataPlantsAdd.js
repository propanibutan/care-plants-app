import React, { useState } from 'react';
import { db, auth } from '../firebase-config';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import PlantsForm from '../pages/PlantsForm';

//function which add new plant to base
const INITIAL_VALUES = { name:'', light:'', water:'', temperature:'', humidity:'', ground:'', note:'' }

export default function DataPlantsAdd({ onSubmit }){
    const [uidUser, setUidUser] = useState(null);

    onAuthStateChanged(auth, (currentUser) => { 
        if (currentUser) {
            const uid = currentUser.uid;
            setUidUser(uid);
          }
    });
    console.log(uidUser);

    const usersCollectionRef = doc(db, "users", `${uidUser}`)

    const [newName, setNewName] = useState("");
    const [newLight, setNewLight] = useState("");
    const [newWatering, setNewWatering] = useState("");
    const [newTemp, setNewTemp] = useState(0);
    const [newHumidity, setNewHumidity] = useState(0);
    const [newGround, setNewGround] = useState("");
    const [newNote, setNewNote] = useState("");

    const createPlant = async () => {
        await setDoc(usersCollectionRef, { 
         plants: arrayUnion( {newName,
             newLight,
             newWatering,
             newTemp,
             newHumidity,
             newGround,
             newNote}),
        }, 
        { merge: true }
        );
    };

    return (
        <PlantsForm 
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