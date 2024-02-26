function Card (props) {
    console.log(props)
    return (
        <div key={props.id} className="card">
            <img src={props.src} alt={props.alt} className="card--image" />
            {!props.openSpots && <div className="card--badge">SOLD OUT</div>}
            <h3 className="card--title">{props.title}</h3>
            <p className="card--description">{props.description}</p>
            <p className="card--stats">Rating: {props.stats.rating}, Reviews: {props.stats.reviewCount}</p>
            <p className="card--location">Location: {props.location}</p>
            <p className="card--price">Price: ${props.price}</p>
        </div>
    )
}

export default Card