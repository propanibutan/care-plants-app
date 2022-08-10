import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Menu from './pages/Menu.js';
import Home from './pages/Home';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
import NotFound from './components/NotFound.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

const App = () => {
  const [signedInUser, setSignedInUser] = useState({});
  console.log('App1', signedInUser)

  onAuthStateChanged(auth, (currentUser) => {
    setSignedInUser(currentUser);
  });

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp signedInUser={signedInUser} />} />
          <Route 
          path='/menu' 
          element={
            signedInUser 
            ? <Menu signedInUser={signedInUser} />
            : <Navigate replace to={"/"}/>
          } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;