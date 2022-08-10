import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Menu from './pages/Menu.js';
import IsLoggedIn from './components/IsLoggedIn.js';
import LogIn from './components/LogIn.js';
import NotFound from './components/NotFound.js';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<IsLoggedIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;