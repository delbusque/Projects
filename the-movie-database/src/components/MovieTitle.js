export const MovieTitle = ({ title, index }) => {
    return (
        <div className="title-container">
            <label htmlFor={`movie-${index}`} className="title">{title}</label>
            <input className="check-title" type="checkbox" id={`movie-${index}`} name="title" value={title} />
        </div>
    )
}