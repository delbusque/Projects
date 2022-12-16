import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


import SelectedTitlesContext from "../contexts/MoviesContext.js"
import { SaveButton } from './Buttons/SaveButton.js';

import { MovieCard } from "./MovieCard.js";
import { BackButton } from "./Buttons/BackButton.js";

import { API_KEY, API_SEARCH } from './../fetchUtils.js'
import firebase from './../firebaseConfig.js';


export const FetchedMovies = () => {

    const navigate = useNavigate();

    const [query, setQuery] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        setSelectedMoviesId(formData.getAll('movie'));
    }

    const onSearch = (e) => {
        e.preventDefault();
        fetch(`${API_SEARCH}/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(data => {
                // setNewMovies(oldState => [...oldState, data.results])
                console.log(data.results);
                console.log(fetchedMovies);

                setTempMovies(oldState => [...oldState, data.results])
                console.log(fetchedMovies);
            })
    }

    useEffect(() => {

        selectedMoviesId.map(id => fetchedMovies[0].map(movie => {
            return id == movie.id ? setSavedMovies(oldState => [...oldState, movie]) : null
        }))

        console.log(555);

    }, [selectedMoviesId])

    const ref = firebase.firestore().collection('movies');

    const addMovie = (movie) => {
        ref.doc(movie.title).set(movie).catch((err) => console.error(err));
        navigate('/saved')
    }

    useEffect(() => {

        savedMovies.map((movie) => {
            addMovie(movie)
        })

        console.log(666);
    }, [savedMovies])


    useEffect(() => {
        return () => {
            setFetchedMovies([])
            setNewMovies([])
        }
    }, [])



    return (
        <>
            <div className='theatre'>TMDB MOVIES LIST</div>
            <form className="search-bar" onSubmit={onSearch}>
                <input type="text" name="query" className="search-input" onChange={(e) => setQuery(e.target.value)} />

                <button>Search</button>
            </form>
            <form className="fetched-form" onSubmit={onSave}>
                {console.log(fetchedMovies.length)}
                {fetchedMovies[0].map(movie => <MovieCard key={movie.id} movie={movie} />)}

                <SaveButton />


            </form>
        </>


    )
}