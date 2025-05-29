import logo from './logo.svg';
import React from 'react';
import Heading from './components/Heading';
import { features } from 'process';
import Features from './components/features';
import Choose from './components/choose';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PageWrapper from './components/PageWrapper';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={[<Heading />, <Features />, <Choose />]}/>
    <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>}/>
    <Route path="/about" element={<PageWrapper><AboutUs/></PageWrapper>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
