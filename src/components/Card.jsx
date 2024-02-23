function Card ({src, alt, text, rating, price}) {
    return (
        <div className="card">
            <img src={src} alt={alt} className="card--image card--item" />
            <p className="card--rating card--item">Rating: {rating}</p>
            <p className="card--text card--item">{text}</p>
            <p className="card--price card--item">Price: ${price}</p>
        </div>
    )
}

export default Card