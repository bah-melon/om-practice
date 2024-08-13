export default function Applications({applications, positions}){
    console.log('applicario', applications)
    return(
        <div className="applications-card">
            <h1>Applications</h1>
            
            {applications ? (
                    <div className="applications">
                        {applications.map((item, i) => (
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