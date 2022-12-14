import { Input } from './Input.js';
import { Titles } from './Titles.js';
import { FetchedMovies } from './FetchedMovies.js';

export const Main = ({ titles, previewed }) => {

    return (
        <>
            {titles.length === 0 ? <Input /> : <div className='theatre'>MOVIE LIST</div>}
            {titles.length > 0 && !previewed && <Titles />}

            {previewed && <FetchedMovies />}
        </>
    )
}