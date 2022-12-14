import { useContext } from 'react';
import TitlesContext from '../contexts/TitlesContext.js';
import styles from './Input.module.css'

export const Input = () => {

    const { onChangeHandler } = useContext(TitlesContext);

    return (
        <>
            <div className={styles['upload-file']}>
                <label htmlFor="inputfile">JSON array only  </label>
                <input type="file" name="inputfile"
                    id="inputfile" onChange={(e) => onChangeHandler(e)} />
            </div>
        </>
    )
}