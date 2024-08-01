import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import '../../design/footer-design/Footer.scss'
import Image from '../../assets/OM Logo.png'

export default function Footer () {
    return (
        <div className="footer">
            <FooterTop></FooterTop>
            <img src={Image} alt="" class="Om-Logo"/>
            <FooterBottom></FooterBottom>
        </div>
        
    )
}