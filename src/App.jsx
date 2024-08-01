import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//---------- Assets-import ---------
//  import $ from 'jquery';
//  import React, { useEffect } from 'react';


// ------ pages-import ----------
import Home from './pages/home';
import Links from './components/links';
import Footer from './components/footer';
import Header from './components/header';
import Otherproducts from './pages/Otherproducts';
import Contact from './pages/contact';
import Store from './pages/store';
import Quote from './pages/quote';
import CommonJs from './components/commonJs';
import Industry from './pages/industries/industry';
import Box_style from './pages/box-Style/box_style';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
//----------- Routes-import ------
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
 
  return (
  <>
     <div id="root">
  <Header/>
  <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="other-product" element={<Otherproducts/>} />
  <Route exact path="contact" element={<Contact/>} />
  <Route exact path="store" element={<Store/>} />
  <Route exact path="quote" element={<Quote/>} />
  <Route exact path="industry" element={<Industry/>} />
  <Route exact path="box_style" element={<Box_style/>} />

  <Route exact path='login' element={<Login/>} />
  <Route exact path='signup' element={<Signup/>} />
  </Routes>
  <Footer/>
  <CommonJs/>
  </div>
  </>
  )
}

export default App
