import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignUpForm from '../pages/SignUpForm';
import { auth } from '../firebase-config'

//Component which maintains signup form functions

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message); 
        }
    };

    return (
        <SignUpForm 
            register={register}
            setRegisterEmail={setRegisterEmail}
            setRegisterPassword={setRegisterPassword}
        />
    );
}