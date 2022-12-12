import { useState } from 'react';
import styles from './Input.module.css'

export const Input = () => {
    const [fileText, setFileText] = useState('');

    const onChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            setFileText(e.target.result)
        };

        reader.readAsText(file);
    }

    return (
        <>
            <div className={styles['upload-file']}>

                <input type="file" name="inputfile"
                    id="inputfile" onChange={(e) => onChange(e)} />
                <br />

                <pre id="output">{fileText}</pre>

            </div>
        </>
    )
}