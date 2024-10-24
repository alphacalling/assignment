import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Toaster />
      <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />

      {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
