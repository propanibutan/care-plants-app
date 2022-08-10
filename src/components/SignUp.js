import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import SignUpForm from '../pages/SignUpForm';
import Menu from '../pages/Menu';

//Component which maintains signup form functions

export default function SignUp({signedInUser}) {
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
        !signedInUser
        ? <SignUpForm 
            register={register}
            setRegisterEmail={setRegisterEmail}
            setRegisterPassword={setRegisterPassword}
        />
        : <Menu />
    );
}