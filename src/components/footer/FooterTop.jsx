import React from "react";
import Instagram from '../../assets/Instagram.png';
import Facebook from '../../assets/Facebook.png';
import LinkedIn from '../../assets/LinkedIn.png';

export default function FooterTop() {
  return (
    <div className="footerTop-container">
      <div className="wrapper">
      <div className="social-media">
      <p>Connect met ons</p>
      <ul>
        <li>
          <img src={Instagram} alt="Instagram-Logo" />
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <img src={Facebook} alt="Facebook-Logo" />
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <img src={LinkedIn} alt="LinkedIn-Logo" />
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
        <div className="service-container">
          <p>Pagina's</p>
          <div className="services">
            <div className="services-left">
              <ul>
                <a href="">
                  <li>Whitepapers</li>
                </a>
                <a href="">
                  <li>Salesforce</li>
                </a>
                <a href="">
                  <li>Onze aanpak</li>
                </a>
                <a href="">
                  <li>Aan de slag</li>
                </a>
              </ul>
            </div>
            <div className="services-right">
              <ul>
                <a href="">
                  <li>Cases</li>
                </a>
                <a href="">
                  <li>Over ons</li>
                </a>
                <a href="">
                  <li>Werken bij</li>
                </a>
                <a href="">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
