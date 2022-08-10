import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Menu from './pages/Menu.js';
import SignUp from './components/SignUp.js';
import IsLoggedIn from './components/IsLoggedIn.js';
import LogIn from './components/LogIn.js';
import LogOut from './components/LogOut.js';
import NotFound from './components/NotFound.js';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<IsLoggedIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;