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
import DataPlantsBase from './components/DataPlantsBase.js';
import DataPlantsAdd from "./components/DataPlantsAdd";
import DataPlantsEdit from './components/DataPlantsEdit.js';

const App = () => {
  const [signedInUser, setSignedInUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setSignedInUser(currentUser);
  });

  return (
      <Router>
        <Routes>
          <Route 
          path='/' 
          element={
            !signedInUser
            ?<Home />
            :<Navigate replace to={"/menu"} />
          } 
          />
          <Route 
          path='/login' 
          element={
            signedInUser === null || undefined
            ?<LogIn onLoggedIn={onAuthStateChanged} />
            :<Navigate replace to={"/menu"} /> 
          } 
          />
          <Route 
          path='/signup' 
          element={
            signedInUser === null || undefined
            ?<SignUp />
            :<Navigate replace to={"/menu"} /> 
          } 
          />
          <Route 
          path='/menu' 
          element={
            signedInUser 
            ? <Menu signedInUser={signedInUser} />
            : <Navigate replace to={"/"}/>
          } 
          />
          <Route path='/addplant' element={<DataPlantsAdd />} />
          <Route path='/plantsbase' element={<DataPlantsBase />} />
          <Route path='/plantsedit' element={<DataPlantsEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;