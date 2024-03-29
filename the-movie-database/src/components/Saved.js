import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import MoviesContext from "../contexts/MoviesContext.js"
import TitlesContext from "../contexts/TitlesContext.js";


import firebase from './../firebaseConfig.js';

export const Saved = () => {

    const { setTitles, } = useContext(TitlesContext);
    const { fetchedMovies, saveMovies } = useContext(MoviesContext);

    const ref = firebase.firestore().collection('movies');

    const addMovie = (movie) => {
        ref.doc(movie.title).set(movie).catch((err) => console.error(err));
    }

    useEffect(() => {
        saveMovies.map(movie => fetchedMovies.map(fetched => fetched.map(exact => {
            return movie == exact.id ? addMovie(exact) : null
        })))
    }, [addMovie, fetchedMovies, saveMovies])

    useEffect(() => {
        const titlesData = window.localStorage.getItem('titles');
        setTitles(JSON.parse(titlesData));
    }, [setTitles])

    return (
        <div className="saved">
            <div >Your movie list was saved successfully</div>
            <Link to={'/'}>
                <button className="btn-home">HOME</button>
            </Link>
        </div>
    )
}