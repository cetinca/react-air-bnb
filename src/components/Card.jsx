function Card (props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.alt} className="card--image card--item" />
            <p className="card--rating card--item">Rating: {props.rating}</p>
            <h3 className="card--text card--item">{props.text}</h3>
            <p className="card--price card--item">Price: ${props.price}</p>
        </div>
    )
}

export default Card