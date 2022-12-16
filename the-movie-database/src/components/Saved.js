import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import MoviesContext from "../contexts/MoviesContext.js"

import { API_KEY, API_SEARCH } from './../fetchUtils.js'

import firebase from './../firebaseConfig.js';

export const Saved = () => {

    const { saveMovies, fetchedMovies } = useContext(MoviesContext);

    const ref = firebase.firestore().collection('movies');

    const addMovie = (movie) => {
        ref.doc(movie.title).set(movie).catch((err) => console.error(err));
    }

    // const saveMoviesHandler = (titles) => {
    //     titles.map(title => {
    //         return fetch(`${API_SEARCH}/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${title}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 // addMovie(data);
    //                 console.log(data.results);
    //             })
    //     })
    // }

    useEffect(() => {

        saveMovies.map(movie => fetchedMovies.map(fetched => fetched.map(exact => {
            return movie == exact.id ? addMovie(exact) : null
        })))
    }, [])

    return (
        <div className="saved">
            <div >Your movie list was saved successfully</div>
            <Link to={'/'}>
                <button className="btn-home">HOME</button>
            </Link>
        </div>
    )
}