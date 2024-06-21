import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Events from './Pages/Events';
import Donate from './Pages/Donate';
import Campaign from './Pages/Campaign';
import Campaign2 from './Pages/Campaign2';
import Blogs from './Pages/Blogs';
export default function App() {
  return (
    <Router basename="/SwaSarjan">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/campaign' element={<Campaign/>}/>
        <Route path="/campaigndetail" element={<Campaign2/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </Router>
  );
}