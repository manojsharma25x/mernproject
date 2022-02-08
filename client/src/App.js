import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
  return <div>
    <Navbar/>
    <About/>
    <Contact/>
    <Register/>
    <Login/>
    <Home/>
  </div>;
};

export default App;

