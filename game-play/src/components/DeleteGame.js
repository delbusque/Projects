import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as gameService from '../services/gamesService';
import AuthContext from "../contexts/AuthContext";
import GameContext from "../contexts/GameContex";

const DeleteGame = () => {

    const { gameId } = useParams();
    const { user } = useContext(AuthContext);
    const { deleteGameHandler } = useContext(GameContext);
    const navigate = useNavigate();

    gameService.deleteGame(gameId, user.accessToken).then(() => {
        deleteGameHandler(gameId);
        navigate('/')
    }).catch((err) => console.log(err));

    return (
        null
    )
}

export default DeleteGame;