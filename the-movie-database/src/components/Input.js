import { useContext } from "react"
import TitlesContext from "../contexts/TitlesContext.js"
import { useNavigate } from 'react-router-dom';

export const Input = () => {

    const { setTitles } = useContext(TitlesContext);

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = function (e) {

            file.type === 'application/json' ? setTitles(JSON.parse(e.target.result)) : setTitles(e.target.result.split(','));

        };
        reader.readAsText(file);
        navigate('/titles')
    }

    return (
        <>
            <div className='theatre'>UPLOAD YOUR LIST</div>
            <div className='upload-container'>

                <input type="file" name="inputfile"
                    id="inputfile" onChange={(e) => onChangeHandler(e)} />
            </div>
        </>
    )
}