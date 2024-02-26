import Card from "./Card";
import Data from "./Data";


function Cards() {
    const MappedCards = Data.map(x => (
        < Card key={x.id} src={x.coverImg} title={x.title} description={x.description} alt={x.title} stats={x.stats} price={x.price} location={x.location} openSpots={x.openSpots} />
    ))
    return (
        <div className="cards">
            {MappedCards}
        </div>
    )
}

export default Cards