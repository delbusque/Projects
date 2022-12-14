import { useState, useEffect } from 'react';
import firebase from './firebaseConfig.js';
import './App.css';

import TitlesContext from './contexts/TitlesContext.js';
import SelectedTitlesContext from './contexts/SelectedTitlesContext.js';

import { Input } from './components/Input.js';
import { Titles } from './components/Titles.js';
import { FetchedMovies } from './components/FetchedMovies.js';

import { API_KEY, API_SEARCH } from './fetchUtils.js'

function App() {

  const ref = firebase.firestore().collection('movies');

  const addMovie = (movie) => {
    ref.doc().set(movie).catch((err) => console.error(err))
  }


  const [titles, setTitles] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [selectedMoviesId, setSelectedMoviesId] = useState([]);

  const [previewed, setPreviewed] = useState(false);
  const [savedMovies, setSavedMovies] = useState([])

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
    savedMovies.map(movie => addMovie(movie));
  }, [savedMovies])

  return (
    <TitlesContext.Provider value={{ titles, setTitles, onChangeHandler, fetchedMovies }}>
      <SelectedTitlesContext.Provider value={{ selectedTitles, setSelectedTitles, setPreviewed, setSelectedMoviesId }}>
        <div className="App">

          {titles.length === 0 ? <Input /> : <div className='theatre'>Welcome to THE MOVIE THEATRE</div>}
          {titles.length > 0 && !previewed && <Titles />}

          {previewed && <FetchedMovies />}

        </div>
      </SelectedTitlesContext.Provider>
    </TitlesContext.Provider>
  );
}

export default App;
