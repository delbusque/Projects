import { useState, useEffect } from 'react';

import * as gamesService from '../../services/gamesService';

import Game from "./Game";

const Catalog = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        gamesService.getAll().then(data => setGames(data));
    }, [])

    return (

        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {games.length > 0
                ? games.map(g => <Game key={g._id} game={g} />)
                : <h3 className="no-articles">No articles yet</h3>}




        </section>
    )
}

export default Catalog;