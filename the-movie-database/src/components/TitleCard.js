export const TitleCard = ({ title, index }) => {
    return (
        <label htmlFor={`movie-${index}`} className="title-container">
            <span className="title">{title}</span>
            <input className="check-title" type="checkbox" id={`movie-${index}`} name="title" value={title} />
        </label>
    )
}