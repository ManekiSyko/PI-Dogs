import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Landing from './components/LandingPage/Landing'
import Home from './components/HomePage/Home';
import GlobalStyles from './components/font/font';
import Nav from './components/NavigationBar/Nav'
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';

function App() {

  let location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path='/Detail/:id' element={<Detail />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Form' element={<Form />}/>
      </Routes>   
    </div>
  );
}
export default App;
