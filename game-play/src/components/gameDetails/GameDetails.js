import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const GameDetails = ({ games, addComment }) => {

    const { user } = useContext(AuthContext);

    const { gameId } = useParams();
    const game = games.find(g => g._id == gameId)

    const [comment, setComment] = useState({
        username: '',
        comment: ''
    });

    const submitCommentHandler = (e) => {
        e.preventDefault();

        const currComment = `${comment.username}: ${comment.comment}`;
        addComment(gameId, currComment)
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }



    return (

        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        {game.comments?.map(c =>
                            <li className="comment">
                                <p>{c}</p>
                            </li>)}

                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    {!game.comments && <p className="no-comment">No comments.</p>}

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game ) */}
                {user._id === game._ownerId
                    ? <div className="buttons">
                        <a href="#" className="button">
                            Edit
                        </a>

                        <Link to={`/delete/${gameId}`} className="button">
                            Delete
                        </Link>
                    </div>
                    : null}
            </div>

            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {user._id !== game._ownerId
                ? <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitCommentHandler}>

                        <input type="text" name='username' placeholder='Username'
                            onChange={onChange} value={comment.username} />

                        <textarea name="comment" placeholder="Comment......"
                            onChange={onChange} value={comment.comment} />

                        <input className="btn submit" type="submit" value="Add Comment" />

                    </form>
                </article>
                : null}
        </section>
    )
}

export default GameDetails;