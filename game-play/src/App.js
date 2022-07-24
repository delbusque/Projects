import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';

import './App.css';

import * as gamesService from './services/gamesService';


import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import CreateGame from './components/createGame/CreateGame';
import Catalog from './components/catalog/Catalog';
import GameDetails from './components/gameDetails/GameDetails';

const Register = lazy(() => import('./components/register/Register'));

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesService.getAll().then(data => setGames(data));
    }, []);

    const createGameHandler = (gameData) => {

        setGames(state => [
            ...state,
            {
                ...gameData,
                _id: uniqid()
            }
        ])

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
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={
                        <Suspense fallback={<span>Loading ...</span>}>
                            <Register />
                        </Suspense>
                    } />
                    <Route path='/create' element={<CreateGame createGameHandler={createGameHandler} />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
                </Routes>
            </main>


        </div>
    );
}

export default App;
