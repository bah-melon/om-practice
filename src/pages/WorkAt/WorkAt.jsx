import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ImageWidget from "../../components/workAt/ImageWidget"
import CardsSection from "../../components/workAt/CardsSection"
import SectionHeader from "../../components/section-header/SectionHeader"
import OpenPositions from "../../components/workAt/OpenPositions"
import '../../design/workat-design/WorkAt-design.scss'
import Prefooter from "../../components/prefooter/Prefooter"
import { cardContent } from "../../data/workAt-data/cardContent"
import { imageWidget } from "../../data/workAt-data/imageWidget"
import { prefooter } from "../../data/workAt-data/prefooter"

export default function WorkAt(){

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