import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SectionHeader from "../../components/section-header/SectionHeader";
import Button from "../../components/button/Button";
import ImageWidget from "../../components/workAt/ImageWidget";
import '../../design/overons-design/OverOns-design.scss'
import FirstImg from '../../assets/overOns/firstimg.jpg'
import SecondImg from '../../assets/overOns/secondimg.jpg'
import ThirdImg from '../../assets/overOns/thirdimg.jpg'

export default function OverOns(){

    const imageWidget={
        image1: FirstImg,
        image2: SecondImg,
        image3: ThirdImg
    }

    return(
        <div className="container">
            <Navbar />
            <div className="overOns-content">
                <div>
                    <SectionHeader
                        title='Doelen van morgen, drijfveren van vandaag.'
                        subtitle='OrangeMelons versnelt, faciliteert en optimaliseert groei door een integrale aanpak. Samen met onze aangesloten bureaus: gespecialiseerde digitale versnellers die elkaar versterken.'
                        className='section-header'/>
                    <Button title='Over ons'/>
                </div>
                <ImageWidget 
                    image1={imageWidget.image1}
                    image2={imageWidget.image2}
                    image3={imageWidget.image3}/>
            </div>
        </div>
    )
}