import React from 'react'
import LogInForm from '../pages/LogInForm';

//Component which maintains login form functions

export default function LoggedIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {

    };

    return (
        <LogInForm />
    );
}