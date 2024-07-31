import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import '../../design/footer-design/Footer.scss'

export default function Footer () {
    return (
        <div style={{border:"2px solid black"}}><FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </div>
        
    )
}