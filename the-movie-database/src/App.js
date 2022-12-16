import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';

import TitlesContext from './contexts/TitlesContext.js';
import MoviesContext from './contexts/MoviesContext.js';

import { Input } from './components/Input.js';
import { Titles } from './components/Titles.js';
import { FetchedMovies } from './components/FetchedMovies.js';

import { Saved } from './components/Saved.js';



function App() {

  const navigate = useNavigate();

  const [titles, setTitles] = useState([]);
  const [previewTitles, setPreviewTitles] = useState([]);

  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);

  const [searchedMovies, setSearchedMovies] = useState([]);

  return (

    <div className="App">
      <TitlesContext.Provider value={{ titles, setTitles, previewTitles, setPreviewTitles }}>
        <MoviesContext.Provider value={{ fetchedMovies, setFetchedMovies, saveMovies, setSaveMovies, searchedMovies, setSearchedMovies }}>
          <Routes>
            <Route path='/' element={<Input />} />

            <Route path='/titles' element={<Titles />} />

            <Route path='/movies' element={<FetchedMovies />} />
            <Route path='/saved' element={<Saved />} />
          </Routes>
        </MoviesContext.Provider>
      </TitlesContext.Provider>
    </div>


  );
}

export default App;
