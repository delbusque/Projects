import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { API_KEY, API_SEARCH } from './../fetchUtils.js'

import TitlesContext from "../contexts/TitlesContext.js";
import MoviesContext from "../contexts/MoviesContext.js";

import { SaveButton } from './Buttons/SaveButton.js';

import { MovieCard } from "./MovieCard.js";
import { BackButton } from "./Buttons/BackButton.js";

export const FetchedMovies = () => {

    const navigate = useNavigate();
    const { previewTitles } = useContext(TitlesContext);
    const { fetchedMovies, setFetchedMovies, setSaveMovies, searchedMovies, setSearchedMovies } = useContext(MoviesContext);

    const [query, setQuery] = useState('');

    const fetchMoviesHandler = (titles) => {
        titles.map(title => {
            return fetch(`${API_SEARCH}/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${title}`)
                .then(res => res.json())
                .then(data => {
                    setFetchedMovies(oldState => [...oldState, data.results]);
                })
        })
    }

    useEffect(() => {
        fetchMoviesHandler(previewTitles);
    }, [previewTitles])

    useEffect(() => {
        return () => {
            setFetchedMovies([]);
        }
    }, [])

    useEffect(() => {
        setFetchedMovies(() => searchedMovies)
    }, [searchedMovies])


    const onSave = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        setSaveMovies(formData.getAll('movie'));
        navigate('/saved');
    }

    const onSearch = (e) => {
        e.preventDefault();

        if (query == '') {
            return;
        }

        fetch(`${API_SEARCH}/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(data => {

                setSearchedMovies(oldState => [...oldState, data.results]);
            });

        e.currentTarget.reset();
        setSearchedMovies(() => [])
    }


    return (
        <>
            <div className='theatre'>TMDB MOVIES LIST</div>
            <form className="search-bar" onSubmit={onSearch}>
                <input type="text" name="query" className="search-input" onChange={(e) => setQuery(e.target.value)} />

                <button>Search</button>
            </form>

            <form className="fetched-form" onSubmit={onSave}>


                {fetchedMovies[0]?.length == 0
                    ? <div>No titles found.</div>
                    : fetchedMovies.map(origin => origin.map(movie => <MovieCard key={movie.id} movie={movie} />))
                }

                {
                    fetchedMovies[0]?.length !== 0 && <SaveButton />
                }

            </form>
        </>


    )
}