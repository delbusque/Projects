import { useState } from 'react';
import styles from './Input.module.css'

export const Input = () => {
    const [titles, setTitles] = useState([]);

    const onChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            setTitles(JSON.parse(e.target.result));
        };
        reader.readAsText(file);
    }

    console.log(titles);

    return (
        <div className={styles['upload-file']}>
            <label htmlFor="inputfile">Works only with a JSON array structure </label>
            <input type="file" name="inputfile"
                id="inputfile" onChange={(e) => onChange(e)} />
        </div>
    )
}