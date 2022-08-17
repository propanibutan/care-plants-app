import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase-config';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import MenuMain from '../pages/MenuMain';

export default function PlantsManager() {
    const [plants, setPlants] = useState("");
    const [uidUser, setUidUser] = useState(null);

    const usersCollectionRef = doc(db, "users", `${uidUser}`)
        console.log('plantsState', plants)
    
    onAuthStateChanged(auth, (currentUser) => { 
        if (currentUser) {
            const uid = currentUser.uid;
            setUidUser(uid);
          }
    });
    console.log(uidUser);

    

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

    // if (!plants) return;

    return (
        <MenuMain addPlants={addPlants} />
        // <div>
        //     <ul>
        //         {plants.map(plant => (
        //             <li key={plant.id}>
        //                 <Plant plant={plant} onUpdate={updatePlant} onDelete={deletePlant}  /> 
        //              </li>
        //         ))}
        //     </ul>
        //     <AddPlantButton handleClickAdd={handleClickAdd} />
        //     {isShown === true && (<div>
        //         <PlantAdd onSubmit={addPlants}/>
        //     </div>)}
        // </div>
    );
}