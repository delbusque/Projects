import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Header from './components/header/Header';

import Main from './components/main/Main';
import Apples from './components/fruits/Apples';
import Pears from './components/fruits/Pears';

import Footer from './components/footer/Footer';
import Register from './components/register/Register.js';
import Login from './components/login/Login.js';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { firebaseConfig } from './firebase/firebaseInit';

function App() {

  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRefApples = collection(db, 'apples');
  const [apples, setApples] = useState([]);

  useEffect(() => {
    getDocs(colRefApples)
      .then(snapshot => {
        snapshot.docs.forEach(doc => setApples(oldState => [...oldState, { ...doc.data(), id: doc.id }]))
      })
  }, [])

  return (
    <div id="top" className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/fruit/apples' element={<Apples apples={apples} />} />
        <Route path='/fruit/pears' element={<Pears />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </div>

  );

}

export default App;
