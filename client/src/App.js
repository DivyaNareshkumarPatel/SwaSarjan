import React , { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import DataProvider from './context/DataProvider';


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
import AdminPage from './Pages/Admin';
import AdminLogin from './Components/AdminLogin';
import TermsAndConditions from './Pages/Terms&Condition_PrivacyPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';


const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? 
    <Outlet/>
    :
    <Navigate replace to='/admin29/login' />
}

export default function App() {

  const [ isAuthenticated , isUserAuthenticated ] = useState(false);

  return (
    <DataProvider>
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
          <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/admin29/login" element={<AdminLogin isUserAuthenticated={isUserAuthenticated}/>}/>
          <Route path='/admin29' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/admin29" element={<AdminPage/>}/>
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}