import '../../design/brandstory-design/BrandStory.scss'

export default function BrandStory({header, brandStoryContent, image}){
    return(
        <div className="brand-story">
            <div>
                <small>MERKVERHAAL</small>
                <h1>{header}</h1>
                <div>
                    {brandStoryContent.map(content => (
                        <ul key={content.title}>
                            <li>{content.title}</li>
                            <p>{content.content}</p>
                        </ul>
                    ))}
                </div>
            </div>
            <div className='image'>
                <img src={image} alt="" />
            </div>            
        </div>
    )
}