import grid from "../images/grid.png"

function Hero() {
    return (
        <div className="hero">
            <img className="hero--image hero--item" src={grid} alt="Gird pictures"></img>
            <h1 className="hero--title hero--item">Online Experiences</h1>
            <p className="hero--text hero--item">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero
