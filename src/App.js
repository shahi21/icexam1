import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './components/home';
import About from './components/ab';
import Menu from './Components/menu';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbarpage';

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/navbar" element={<NavbarPage/>}/>
      <Route path ="/menu" element={<Menu/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;