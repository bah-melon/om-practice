export default function Cars({id, title, content, className, backgroundColor, color}){
    return(
        <div className={className} style={{backgroundColor: backgroundColor, color: color}}>
            <small>{id}</small>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}