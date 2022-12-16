import { Link } from "react-router-dom"

export const BackButton = () => {

    return (
        <Link to={'/movies'}>
            <button type="submit" className="btn">BACK</button>
        </Link>
    )
}