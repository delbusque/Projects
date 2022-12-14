import { useContext } from 'react';
import TitlesContext from '../contexts/TitlesContext.js';

export const Input = () => {

    const { onChangeHandler } = useContext(TitlesContext);

    return (
        <>
            <div className='upload-container'>
                <label htmlFor="inputfile">JSON array only  </label>
                <input type="file" name="inputfile"
                    id="inputfile" onChange={(e) => onChangeHandler(e)} />
            </div>
        </>
    )
}