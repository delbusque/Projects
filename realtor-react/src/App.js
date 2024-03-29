import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
