import { Link } from "react-router-dom"

export const BackButton = () => {

    return (
        <Link to={'/titles'}>
            <button type="submit" className="btn">BACK</button>
        </Link>
    )
}