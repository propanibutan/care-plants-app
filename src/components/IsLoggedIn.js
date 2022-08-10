import React, { useState } from 'react';
import Menu from '../pages/Menu';
import Home from '../pages/Home';

export default function IsLoggedIn() {
    const [signedInUser, setSignedInUser] = useState(null);

    return signedInUser
        ? <Menu />
        : <Home />;
}