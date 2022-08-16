import React, { useState } from 'react';
import { db } from '../firebase-config';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import PlantsAdd from '../pages/PlantsAdd';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config.js';

//function which add new plant to base

export default function DataPlantsAdd({ uid }){
    console.log(uid)
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