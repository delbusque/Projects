import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Main from './components/main/Main';
import Apples from './components/fruits/Apples';
import Pears from './components/fruits/Pears';

import Footer from './components/footer/Footer';
import Register from './components/register/Register.js';
import Login from './components/login/Login.js';
import Logout from './components/logout/Logout.js'
import Account from './components/account/Account.js';
import { AuthContextProvider } from './contexts/AuthContext.js'

function App() {

  return (
    <div id="top" className="App">
      <AuthContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/fruit/apples' element={<Apples />} />
          <Route path='/fruit/pears' element={<Pears />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/account' element={<Account />} />
        </Routes>

        <Footer />
      </AuthContextProvider>
    </div>

  );

}

export default App;
