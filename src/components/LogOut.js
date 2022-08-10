import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import React from 'react'
import { Button } from '@mui/material';


//Component which maintains log out functions

//i can do promises with catch or async/await
export default function LogOut() {
    const logout = async () => {
        await signOut(auth);
    };

    return (
        <Button variant="contained" onClick={ logout }>Sign out</Button>
    );
}