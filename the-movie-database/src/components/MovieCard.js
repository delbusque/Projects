import { API_IMAGE } from "../fetchUtils.js";

export const MovieCard = ({ movie }) => {
    return (

        <>
            <label htmlFor={`movie-${movie.id}`} className="card-label">
                <div className="movie-card">
                    <img className="card-image" src={API_IMAGE + movie.backdrop_path} alt={movie.original_title + ' image'} />
                    <div className="card-info" >
                        <h2 className="card-title">{movie.original_title}</h2>
                        <p className="card-overview">{movie.overview.slice(0, 180)}..</p>
                        <p className="card-date">- {movie.release_date.slice(0, 4)} -</p>

                    </div>
                    <div className="checkbox-cont">
                        <input className="card-checkbox" type="checkbox" id={`movie-${movie.id}`} name="movie"
                            value={movie.id} />
                    </div>
                </div>
            </label>
        </>
    )
}