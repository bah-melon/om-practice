import Card from "./CardsSection/Card";

export default function CardsSection({title, cardContent}){
    return(
        <div className="cards-section">
            <div className="cards-title">
                <small>WAAR WE VOOR STAAN</small>
                <h1>{title}</h1>
            </div>
            <div className="cards">
                {cardContent.map(card => (
                    <Card key={card.id} id={card.id} title={card.title} content={card.content} backgroundColor={card.backgroundColor} color={card.color} className='card'/>
                ))}
            </div>
            
        </div>
    )
}