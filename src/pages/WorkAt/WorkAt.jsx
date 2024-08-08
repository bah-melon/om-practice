import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ImageWidget from "../../components/workAt/ImageWidget"
import CardsSection from "../../components/workAt/CardsSection"
import SectionHeader from "../../components/section-header/SectionHeader"
import OpenPositions from "../../components/workAt/OpenPositions"
import '../../design/workat-design/WorkAt-design.scss'
import coffeeMan from '../../assets/workAt/coffeeman.webp'
import Prefooter from "../../components/prefooter/Prefooter"

import FirstImg from '../../assets/workAt/firstImg.webp'
import SecondImg from '../../assets/workAt/secondImg.webp'
import ThirdImg from '../../assets/workAt/thirdImg.webp'


export default function WorkAt(){

    const cardContent = [{
            id: '#1',
            title: 'Innovatie en ontwikkeling',
            content: 'Wij zijn, samen met jou, in ontwikkeling. Een continu proces om te werken met de laatste technieken, om in beweging te blijven en te innoveren. We staan nooit stil. Dus wil je zelf groeien (innoveren) en de klant het beste van het beste bieden? Join us.',
            backgroundColor: '#FF6600',
            color: '#FFFF'
        },{
            id: '#2',
            title: 'Internationaal samenwerken',
            content: 'We verbinden over de grenzen. Niet al je collega’s zitten naast je. De dynamiek van over de grens werken en elkaar daarin vinden, brengt een extra dynamiek met zich mee. Dit prikkelt en geeft energie.',
            backgroundColor: '#FFFF',
            color: '#000'
        },{
            id: '#3',
            title: 'Creatieve ruimte',
            content: 'Bij ons krijg je ruimte om creatief te zijn. Ja kan jouw ideeën aandragen en je krijgt de ruimte om te innoveren. We nemen geen genoegen met de status quo maar proberen onze creativiteit te gebruiken om de wereld ten positieve te veranderen',
            backgroundColor: '#2D8F60',
            color: '#FFFF'
        },{
            id: '#4',
            title: 'Wij zijn jouw cheerleaders',
            content: 'De ondernemer in jou mag bij ons aan de slag. Voel je voor ieder project volledig eigenaar. Wij zeggen: Go! Doen! Ga er voor! You are in control omdat wij in je geloven. Daarbij zullen wij je altijd supporten in next steps, persoonlijk en in onze academy.',
            backgroundColor: '#FFFF',
            color: '#000'
        },{
            id: '#5',
            title: 'Flexibel werken',
            content: 'Het mooie van ons vak is dat je overal met internet en een stekker met stopcontact je al een heleboel werk kan verzetten. Concentratie en je eigen bubbel werken kunnen enorm van belang zijn voor de focus. Wij geven je de ruimte zonder het team uit het oog te verliezen.',
            backgroundColor: '#ee789c',
            color: '#FFFF'
        },{
            id: '#6',
            title: 'Plezier is kwaliteit',
            content: 'Voor ons valt of staat kwaliteit ook met plezier, dat jij zin hebt om iedere dag je tanden in een project te zetten. Je Melonhead in te zetten in de creatie van mooie software. Dus laten we er samen vooral ook iets heel leuks van maken!',
            backgroundColor: '#792149',
            color: '#FFFF'
        }
    ]

    const prefooter = {
        heading: 'Laten we onze (meloen)koppen bij elkaar steken.',
        subheading: 'We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking.',
        title: 'Melonhead Bas spreekt je graag!',
        image: coffeeMan
    }

    const imageWidget = {
        image1: FirstImg,
        image2: SecondImg,
        image3: ThirdImg
    }
    
    return(
        <div className="container">
            <Navbar />
            <div className="workat-content">
                <SectionHeader
                    title='Laten we een Melonhead worden'
                    subtitle='Kan jij je in onderstaande vinden, dan denk ik dat wij 
                    weleens een heel goed team kunnen worden. Wij hebben er nu al zin in. Jij?'
                    className='section-header'
                />
                <ImageWidget 
                    image1={imageWidget.image1}
                    image2={imageWidget.image2}
                    image3={imageWidget.image3}/>
                <CardsSection 
                    title='De eerste zes redenen om bij ons te werken'
                    cardContent={cardContent}/>
                <OpenPositions/>
                <Prefooter 
                    heading={prefooter.heading} 
                    subheading={prefooter.subheading} 
                    title={prefooter.title}
                    image={prefooter.image} />
            </div>
            <Footer />
        </div>
    )
}