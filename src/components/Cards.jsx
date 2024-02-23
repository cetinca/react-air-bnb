import Card from "./Card";
import card1 from "../images/card1.png"


const cardData = {
    src: card1,
    text: "bike",
    alt: "Bike",
}

function Cards () {
    return (
        <div className="cards">
            < Card  src={card1} text="bike1" alt="Bike1" rating="4.7" price="15"/>
            < Card  src={card1} text="bike2" alt="Bike2" rating="4.2" price="23"/>
            < Card  src={card1} text="bike3" alt="Bike3" rating="5.8" price="18"/>
        </div>
    )
}

export default Cards