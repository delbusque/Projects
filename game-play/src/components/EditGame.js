import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameContext from "../contexts/GameContex";
import AuthContext from "../contexts/AuthContext";
import * as gameService from '../services/gamesService';

const EditGame = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { gameId } = useParams();
    const { games, editGameHandler } = useContext(GameContext);
    const game = games.find(g => g._id === gameId)

    const onSubmit = (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.target));

        gameService.editGame(gameId, user.accessToken, newData).then(editedGame => {
            editGameHandler(gameId, editedGame)
            navigate(`/catalog/${gameId}`)
        })
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min={1} defaultValue={game.maxLevel} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary} />
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    )
}

export default EditGame;