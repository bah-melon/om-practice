import { Link } from "react-router-dom"

export default function ShowPositions({positions}){
    return(
        <div className="show-position">
            <h1>Open Positions</h1>
            {positions ? (
                <div className="position">
                    {positions.data.map((item, i) => (
                            <ul key={i} >
                                <Link to={`/position/${item.id}`}>
                                    <li><b>Title:</b> {item.title}</li>
                                    <li><b>Location:</b> {item.location}</li>
                                    <li><b>Description:</b> {item.description}</li>
                                </Link>
                            </ul>
                        ))}
                </div>
            ):(
                <p>Loading positions...</p>
            )}
        </div>
    )
}