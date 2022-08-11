import { useEffect, useState, lazy, Suspense, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';

import './App.css';

import * as gamesService from './services/gamesService';

import AuthContext from './contexts/AuthContext';
import GameContext from "./contexts/GameContex";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from "./components/logout/Logout.js";
import CreateGame from './components/createGame/CreateGame';
import Catalog from './components/catalog/Catalog';
import GameDetails from './components/gameDetails/GameDetails';
import DeleteGame from "./components/DeleteGame";

const Register = lazy(() => import('./components/register/Register'));

function App() {
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    const userLogin = (userData) => {
        setAuth(userData);
    };

    const userLogout = () => setAuth({});

    useEffect(() => {
        gamesService.getAll().then(data => setGames(data));
    }, []);

    const createGameHandler = (gameData) => {
        setGames(state => [
            ...state,
            {
                ...gameData
            }
        ])
    }

    const deleteGameHandler = (gameId) => {
        setGames(state => {
            return [
                ...state.filter(g => g._id !== gameId)
            ]
        })
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = games.find(g => g._id == gameId);
            const comments = game.comments || [];

            comments.push(comment);

            return [
                ...state.filter(g => g._id !== gameId),
                { ...game, comments }
            ];
        })

    }

    return (
        <GameContext.Provider value={{ createGameHandler, deleteGameHandler }}>
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home games={games} />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={
                                <Suspense fallback={<span>Loading ...</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/create' element={<CreateGame />} />
                            <Route path='/catalog' element={<Catalog games={games} />} />
                            <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
                            <Route path='/delete/:gameId' element={<DeleteGame />} />
                        </Routes>
                    </main>


                </div>
            </AuthContext.Provider></GameContext.Provider>
    );
}

export default App;
