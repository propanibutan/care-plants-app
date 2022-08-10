import React, { useState } from 'react';
import Menu from '../pages/Menu';
import Home from '../pages/Home';

//Component which determine is user logged in or not

export default function IsLoggedIn() {
    const [signedInUser, setSignedInUser] = useState(null);

    return signedInUser
        ? <Menu />
        : <Home />;
}