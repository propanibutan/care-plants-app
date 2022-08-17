import React, { useEffect, useState } from 'react';
// import { db } from '../firebase-config';
import { uid } from "uid";
import { set, ref } from 'firebase/database';
import { db, auth } from '../firebase-config';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Plant from './Plant';
import PlantAdd from './PlantAdd';

export default function PlantsManager() {
    const [plants, setPlants] = useState("");
    const [uidUser, setUidUser] = useState(null);

    onAuthStateChanged(auth, (currentUser) => { 
        if (currentUser) {
            const uid = currentUser.uid;
            setUidUser(uid);
          }
    });
    console.log(uidUser);

    const usersCollectionRef = doc(db, "users", `${uidUser}`)
    console.log('plantsState', plants)
    console.log(ref)

    // useEffect(() => {
    //     onValue(ref(db), snapshot => {
    //         const data = snapshot.val();
    //         if(data !== null){
    //             Object.values(data).map(plant => {
    //                 setPlants(plants => [...plants, plant])
    //             })
    //         }
    //     })
    // }, [])
    
    const addPlants = async (plant) => {
        await setDoc(usersCollectionRef, { 
         plants: arrayUnion(plant),
        }, 
        { merge: true }
        );
        setPlants(plants => [...plants, plant]);
    };
    
    // const addPlants = (plant) => {
    //     const uuid = uid();
    //     set(ref(db, `/${uuid}`), {
    //         plants: plants,
    //         uuid: uuid
    //     });
    //     console.log("uuid", uuid, 'plantsWirte', plants)
    //     setPlants(plants => [...plants, plant]);
    //     console.log("adplant", plants, plant)
    // }

    
    // function updatePlant(id, plant) {
    //     API.updatePlant(id, plant)
    //     .then(updatedPlant => setPlants(plants => plants.map( plant => plant.id === id ? updatedPlant : plant)));
    // }

    // function deletePlant(id) {
    //     API.deletePlant(id)
    //     .then(() => setPlants(plants => plants.filter(plant => plant.id !== id)));
    // }

    if (!plants) return <PlantAdd onSubmit={addPlants}/>;

    return (
        <div>
            {/* <ul>
                {plants.map(plant => (
                    <li key={plant.id}>
                        <Plant plant={plant}  /> onUpdate={updatePlant} onDelete={deletePlant} */}
                    {/* </li>
                ))}
            </ul> */}
            <div>
                <PlantAdd onSubmit={addPlants}/>
            </div>
        </div>
    );
}