import airbnb from "../images/air.png"

function Navbar () {
    return (
        <nav>
            <img className="nav--logo" src={airbnb} alt="Airbnb Logo"></img>
            <h2 className="nav--text">airbnb</h2>
        </nav>
    )
}

export default Navbar