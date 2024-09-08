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
import Cardbox from './pages/industries/cardbox';
import Bottom_closure from './pages/box-Style/bottom_closure';
import Blog from './pages/blog';
import About from './pages/about';
import Packaging from './pages/packaging';
import Products from './pages/products';
//----------- Routes-import ------
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {




  return (
    <>
      {window.location.pathname !== '/auth/login' && window.location.pathname !== '/auth/signup' && <Header />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="other-products" element={<Otherproducts />} />
          <Route exact path="contact-us" element={<Contact />} />
          <Route exact path="store" element={<Store />} />
          <Route exact path="quote" element={<Quote />} />
          <Route exact path="industries" element={<Industry />} />
          <Route exact path="industry/card_box" element={<Cardbox />} />
          <Route exact path="box-by-style" element={<Box_style />} />
          <Route exact path="box_style/bottom_closure" element={<Bottom_closure />} />
          <Route exact path="blog" element={<Blog />} />
          <Route exact path="about-us" element={<About />} />
          <Route exact path="packaging" element={<Packaging />} />         
          <Route exact path="/packaging/product" element={<Products />} />         
          {/* --- Login & Signup ------ */}
          <Route exact path="auth/login" element={<Login />} />
          <Route exact path="auth/signup" element={<Signup />} />
        </Routes>
      {window.location.pathname !== '/auth/login' && window.location.pathname !== '/auth/signup' && <Footer />}
    </>
  );
}
export default App
