import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import SignUpForm from '../pages/SignUpForm';

//Component which maintains signup form functions

// BRAKUJE POWROTU DO LOGINU JAKBY KTOS PRZYPADKIEM WSZEDŁ NA SIGNUP
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