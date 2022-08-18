import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import LogInForm from '../pages/LogInForm';

//Component which maintains login form functions

export default function LoggedIn({ onLoggedIn }) {
    const [generalError, setGeneralError] = useState(null);

    const handleSubmit = async ({ email, password }) => {
        setGeneralError(null);
        try {
            const user = await signInWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );
                handleSuccessfulLogIn();
                console.log('loggedin:', user);
            } catch (error) {
                handleFailedLogIn(error.message)
                console.log('loggedin:', error.message); 
            }
    };

    function handleSuccessfulLogIn(user) {
        onLoggedIn(user);
    }

    function handleFailedLogIn(errorMessage) {
        setGeneralError(errorMessage);
    }

    return (
        <LogInForm 
            generalError={generalError}
            onSubmit={handleSubmit}
        />
    );
}