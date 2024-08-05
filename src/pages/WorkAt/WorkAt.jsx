import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ImageWidget from "../../components/workAt/ImageWidget"
import CardsSection from "../../components/workAt/CardsSection"
import SectionHeader from "../../components/section-header/SectionHeader"
import OpenPositions from "../../components/workAt/OpenPositions"
import '../../design/workat-design/WorkAt-design.scss'
import coffeeMan from '../../assets/workAt/coffeeman.webp'
import Prefooter from "../../components/prefooter/Prefooter"

export default function WorkAt(){

    const prefooter = {
        heading: 'Laten we onze (meloen)koppen bij elkaar steken.',
        subheading: 'We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking.',
        title: 'Melonhead Bas spreekt je graag!',
        image: coffeeMan
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
                <ImageWidget />
                <CardsSection/>
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