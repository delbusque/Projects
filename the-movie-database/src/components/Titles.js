import { useContext } from "react"
import TitlesContext from "../contexts/TitlesContext.js"
import SelectedTitlesContext from "../contexts/SelectedTitlesContext.js"
import { MovieTitle } from "./MovieTitle.js"
import { Button } from './Buttons/Button.js';

export const Titles = () => {

    const { titles } = useContext(TitlesContext);
    const { setSelectedTitles } = useContext(SelectedTitlesContext);


    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        setSelectedTitles(formData.getAll('title'));
    }

    return (

        <form className="list-container" onSubmit={onSubmit}>
            <div className="titles-container">
                {titles.map((t, i) => <MovieTitle key={t + i} title={t} index={i} />)}
            </div>

            <Button />
        </form>
    )
}