import { useContext } from "react"
import TitlesContext from "../contexts/TitlesContext.js"
import SelectedTitlesContext from "../contexts/SelectedTitlesContext.js"
import { SaveButton } from './Buttons/SaveButton.js';
import { MovieCard } from "./MovieCard.js";


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
            {fetchedMovies.map(origin => origin.map(movie => <MovieCard key={movie.id} movie={movie} />))}

            <SaveButton />
        </form>

    )
}