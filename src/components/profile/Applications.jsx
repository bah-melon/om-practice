export default function Applications({applications, positions}){
    
    return(
        <div className="applications-card">
            <h1>Applications</h1>
            {applications ? (
                    <div className="applications">
                        {applications.data.map((item, i) => (
                            <ul key={i}>
                                <li><b>Applicant:</b> {item.email} <b>Position:</b> {item.open_position.title}</li>
                            </ul>
                        ))}
                    </div>
                ) : (
                    <p>Loading applications...</p>
                )}
        </div>
    )
}