import { API_IMAGE } from "../fetchUtils.js";

export const MovieCard = ({ movie }) => {

    return (
        <label htmlFor={`movie-${movie.id}`}>
            <div className="movie-card">
                <img className="card-image" src={API_IMAGE + movie.backdrop_path} alt="" />
                <div className="card-info" >
                    <h2 className="card-title">{movie.original_title}</h2>
                    <p className="card-overview">{movie.overview.slice(0, 200)}..</p>
                    <p className="card-date">- {movie.release_date.slice(0, 4)} -</p>
                </div>
                <div>
                    <input className="card-checkbox" type="checkbox" id={`movie-${movie.id}`} name="movie" value={movie.id} />
                </div>
            </div>
        </label>
    )
}