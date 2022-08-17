import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
// import DataPlantsAdd from './components/DataPlantsAdd';
import NotFound from './components/NotFound.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import PlantsManager from './components/PlantsManager.js';



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
            ? <PlantsManager signedInUser={signedInUser} />
            : <Navigate replace to={"/"}/>
          } 
          />
          {/* <Route 
          element={
            signedInUser 
            ? <DataPlantsAdd />
            : <Navigate replace to={"/"}/>
          } 
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;