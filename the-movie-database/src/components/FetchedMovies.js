import { useContext } from "react"
import TitlesContext from "../contexts/TitlesContext.js"
import SelectedTitlesContext from "../contexts/SelectedTitlesContext.js"
import { SaveButton } from './Buttons/SaveButton.js';
import { API_IMAGE } from "../fetchUtils.js";


export const FetchedMovies = () => {

    const { fetchedMovies } = useContext(TitlesContext);
    const { setSelectedMoviesId } = useContext(SelectedTitlesContext);

    const onSave = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        setSelectedMoviesId(formData.getAll('movie'));
    }

    return (
        <form className="fetched-form" onSubmit={onSave}>
            {fetchedMovies.map(origin => {
                return origin.map(
                    movie => {
                        return (
                            <div key={movie.id}>
                                <label className="fetched-movies" htmlFor={`movie-${movie.id}`}>
                                    <h2>{movie.original_title}</h2>
                                    <img src={API_IMAGE + movie.backdrop_path} alt="" />
                                    <p>{movie.overview}</p>
                                    <p>{movie.release_date} / {movie.original_language}</p>
                                    <p>{movie.popularity}</p>
                                </label>
                                <div className="fetched-checkbox">
                                    <input className="checkbox" type="checkbox" id={`movie-${movie.id}`} name="movie" value={movie.id} />
                                </div>
                            </div>
                        )
                    }
                )
            })}

            <SaveButton />
        </form>

    )
}