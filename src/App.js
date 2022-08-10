import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home.js';
import LogIn from './pages/LogIn.js';
import Menu from './pages/Menu';
import NotFound from './components/NotFound.js';
import IsLoggedIn from './components/IsLoggedIn.js';

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