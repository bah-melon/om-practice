import React from 'react';
import SectionHeader from '../../components/section-header/SectionHeader';
import Navbar from '../../components/navbar/Navbar';
import WhitepaperCard from '../../components/whitepaper/WhitepaperCard';
import '../../design/whitepaper-design/Whitepaper-design.scss';
import BannerImg from '../../assets/Banner.png';
import Footer from '../../components/footer/Footer';
import Prefooter from '../../components/prefooter/Prefooter';

export default function Whitepaper() {

    const preFooter = {
        heading : "Laten we afspreken en samen positieve impact maken!",
        subheading : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum libero blandit, fermentum metus a, sodales elit. Vestibulum tincidunt blandit est id accumsan.",
        title : "Spar erover met Andrea"
    }

    return (
        <div className="container">
            <Navbar />
            <div className="whitepaper-mid-section">
                <SectionHeader 
                    title='Whitepaper' 
                    subtitle='Blijf op de hoogte van de nieuwste ontwikkelingen op het gebied van automatisering, data, softwareontwikkeling, AI, cloud services en alles wat met digitalisering te maken heeft.' 
                    className='section-header'
                />
                <div className="cards-section">
                    <WhitepaperCard 
                        title='Het verhaal achter de Woonzorg Thuis app'
                        subtitle='Klik op de kaft om te downloaden.'
                        image={BannerImg}
                        imgWidth='252px'
                        imgHeight='378px'
                    />
                    <WhitepaperCard 
                        title='Het verhaal achter de Woonzorg Thuis app'
                        subtitle='Klik op de kaft om te downloaden.'
                        image={BannerImg}
                        imgWidth='252px'
                        imgHeight='378px'
                    />
                    <WhitepaperCard 
                        title='Het verhaal achter de Woonzorg Thuis app'
                        subtitle='Klik op de kaft om te downloaden.'
                        image={BannerImg}
                        imgWidth='252px'
                        imgHeight='378px'
                    />
                </div>
            </div>
            <Prefooter></Prefooter>
            <Footer></Footer>
        </div>
    );
}
