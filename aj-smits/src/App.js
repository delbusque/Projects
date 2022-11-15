import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import WhiteHeader from './components/header/WhiteHeader';

import Main from './components/main/Main';
import Apples from './components/fruits/Apples';
import Pears from './components/fruits/Pears';

import Footer from './components/footer/Footer';
import Register from './components/register/Register.js';
import Login from './components/login/Login.js';



function App() {
  return (
    <div id="top" className="App">

      <Header />


      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/fruit/apples' element={<Apples />} />
        <Route path='/fruit/pears' element={<Pears />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />


    </div>

  );

}

export default App;
