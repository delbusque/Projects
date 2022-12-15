import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from './firebaseConfig.js';
import './App.css';

import TitlesContext from './contexts/TitlesContext.js';
import SelectedTitlesContext from './contexts/SelectedTitlesContext.js';

import { Main } from './components/Main.js';

import { Saved } from './components/Saved.js';

import { API_KEY, API_SEARCH } from './fetchUtils.js'

function App() {

  const navigate = useNavigate();

  const ref = firebase.firestore().collection('movies');

  const addMovie = (movie) => {
    ref.doc(movie.title).set(movie).catch((err) => console.error(err));
  }


  const [titles, setTitles] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [selectedMoviesId, setSelectedMoviesId] = useState([]);
  const [savedMovies, setSavedMovies] = useState([])

  const [previewed, setPreviewed] = useState(false);


  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setTitles(JSON.parse(e.target.result));

    };
    reader.readAsText(file);
  }

  const fetchMoviesHandler = (titles) => {
    titles.map(title => {
      return fetch(`${API_SEARCH}/movie?api_key=${API_KEY}&query=${title}`)
        .then(res => res.json())
        .then(data => {
          setFetchedMovies(oldState => [...oldState, data.results])
        })
    })
    setSelectedTitles([]);
  }

  useEffect(() => {
    if (selectedTitles.length > 0) {
      fetchMoviesHandler(selectedTitles);
      setPreviewed(true);
    }
  }, [selectedTitles])


  useEffect(() => {
    selectedMoviesId.map(id => fetchedMovies.map(origin => origin.map(movie => {

      return id == movie.id ? setSavedMovies(oldState => [...oldState, movie]) : null
    })))
  }, [selectedMoviesId, fetchedMovies])


  useEffect(() => {
    savedMovies.map(movie => {
      addMovie(movie)
      return navigate('/saved')
    });

  }, [savedMovies])

  return (

    <div className="App">
      <TitlesContext.Provider value={{ titles, setTitles, onChangeHandler, fetchedMovies }}>
        <SelectedTitlesContext.Provider value={{ selectedTitles, setSelectedTitles, setPreviewed, setSelectedMoviesId }}>

          <Routes>
            <Route path='/' element={<Main titles={titles} previewed={previewed} />} />

            <Route path='/saved' element={<Saved />} />
          </Routes>


        </SelectedTitlesContext.Provider>
      </TitlesContext.Provider>
    </div>


  );
}

export default App;
