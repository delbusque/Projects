import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import './App.css';

import * as gamesService from './services/gamesService';


import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateGame from './components/createGame/CreateGame';
import Catalog from './components/catalog/Catalog';


function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesService.getAll().then(data => setGames(data));
    }, []);

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<CreateGame />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                </Routes>
            </main>


        </div>
    );
}

export default App;
