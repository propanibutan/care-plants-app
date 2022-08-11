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
  const [signedInUser, setSignedInUser] = useState(null);
  console.log('App1', signedInUser)

  onAuthStateChanged(auth, (currentUser) => {
    setSignedInUser(currentUser);
  });

  // TUTAJ MI SIE NIE PODOBA ZE MUSZE UZYWAC NAVIGATE PRZY KAZDYM ROUCIE
  //KIEDY CHCE ZEBY ZALOGOWANY UZYTKOWNIK NIE WIDZIAŁ LOGIN I SIGNUP
  return (
      <Router>
        <Routes>
          <Route 
          path='/' 
          element={
            !signedInUser
            ?<Home />
            :<Navigate replace to={"/menu"} />
          } />
          <Route 
          path='/login' 
          element={
            signedInUser === null || undefined
            ?<LogIn />
            :<Navigate replace to={"/menu"} /> 
          } />
          <Route 
          path='/signup' 
          element={
            signedInUser === null || undefined
            ?<SignUp />
            :<Navigate replace to={"/menu"} /> 
          } />
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