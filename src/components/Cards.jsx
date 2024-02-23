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
            < Card  src={card1} text="bike1" alt="Bike1" rating="4.7" price="15"/>
            < Card  src={card1} text="bike1" alt="Bike1" rating="4.7" price="15"/>
        </div>
    )
}

export default Cards