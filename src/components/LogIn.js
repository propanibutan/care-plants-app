import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import LogInForm from '../pages/LogInForm';

//Component which maintains login form functions

export default function LoggedIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            console.log(user);
            
        } catch (error) {
            console.log(error.message); 
        }
    };

    return (
        <LogInForm 
            login={login} 
            setLoginEmail={setLoginEmail}
            setLoginPassword={setLoginPassword}
        />
    );
}