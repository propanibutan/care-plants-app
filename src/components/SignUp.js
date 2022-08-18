import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import SignUpForm from '../pages/SignUpForm';

//Component which maintains signup form functions

export default function SignUp() {
    const [generalError, setGeneralError] = useState(null);

    const handleSubmit = async ({ email, password }) => {
        setGeneralError(null);
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            console.log('loggedin:', user);
        } catch (error) {
            handleFailedLogIn(error.message) 
            console.log('signup:', error.message); 
        }
    };

    function handleFailedLogIn(errorMessage) {
        setGeneralError(errorMessage);
    }

    return (
        <SignUpForm 
        generalError={generalError}
        onSubmit={handleSubmit}
        />
    );
}