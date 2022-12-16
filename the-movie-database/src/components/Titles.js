import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import TitlesContext from "../contexts/TitlesContext.js"
import MoviesContext from "../contexts/MoviesContext.js";


import { TitleCard } from "./TitleCard.js"
import { Button } from './Buttons/Button.js';

export const Titles = () => {

    const navigate = useNavigate();

    const { titles, setPreviewTitles } = useContext(TitlesContext);
    const { setSearchedMovies } = useContext(MoviesContext);



    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        setPreviewTitles(formData.getAll('title'));
        navigate('/movies');
    }

    useEffect(() => {
        setSearchedMovies(() => [])
    }, [])

    return (
        <>
            <div className='theatre'>MOVIE LIST</div>
            <form className="list-container" onSubmit={onSubmit}>
                <div className="titles-container">
                    {titles.map((t, i) => <TitleCard key={t + i} title={t} index={i} />)}
                </div>

                <Button />
            </form>
        </>

    )
}