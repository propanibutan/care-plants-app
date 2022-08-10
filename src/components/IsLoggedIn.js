import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import Menu from '../pages/Menu';
import Home from '../pages/Home';

//Component which determine is user logged in or not

export default function IsLoggedIn() {
    const [signedInUser, setSignedInUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setSignedInUser(currentUser);
    });

    if (signedInUser !== undefined && null){
         return <Menu signedInUser={signedInUser} /> 
        } else {
         return <Home />};
}