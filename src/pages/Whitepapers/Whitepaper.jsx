import React from 'react';
import Footer from '../../components/footer/Footer';
import SectionHeader from '../../components/section-header/SectionHeader';
import Navbar from '../../components/navbar/Navbar';
import WhitepaperCard from '../../components/whitepaper/WhitepaperCard';
import '../../design/whitepaper-design/Whitepaper-design.scss';
import BannerImg from '../../assets/Banner.png';

export default function Whitepaper() {
    return (
        <div className="container">
            <Navbar />
            <div className="mid-section">
                <SectionHeader 
                    title='Whitepaper' 
                    subtitle='Blijf op de hoogte van de nieuwste ontwikkelingen op het gebied van automatisering, data, softwareontwikkeling, AI, cloud services en alles wat met digitalisering te maken heeft.' 
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
        </div>
    );
}
