import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import React from 'react'
import { MenuItem } from '@mui/material';


//Component which maintains log out functions

//i can do promises with catch or async/await
export default function LogOut() {
    const logout = async () => {
        await signOut(auth);
    };

    return (
        <MenuItem onClick={ logout }>Logout</MenuItem>
    );
}