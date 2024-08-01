import React from "react";

export default function FooterBottom() {
  return (
    <div className="footerBottom-container">
      <div className="wrapper">
        <div className="locations-info">
          <div className="location">
            <p><span>Amsterdam</span>(Nederlands)</p>
            <p>Johan Huizingalaan 763a</p>
            <p>1066 VH Amsterdam</p>
            <p className="location-country">Nederland</p>
            <p className="email">hello@orangemelons.com</p>
          </div>
          <div className="location">
            <p><span>Skopje</span>(Macedonië)</p>
            <p>Vasil Gjorgov 19/1-3</p>
            <p>1000 Skopje</p>
            <p className="location-country">Noord-Macedonië</p>
            <p className="email">hello@orangemelons.com</p>
          </div>
          <div className="location">
            <p><span>Struga</span>(Macedonië)</p>
            <p>Ul. Dimce Kovacevski no. 5/18</p>
            <p>6330 Struga</p>
            <p className="location-country">Noord-Macedonië</p>
            <p className="email">hello@orangemelons.com</p>
          </div>
        </div>
        <div className="copyright-info">
            <p>Algemene voorwaarden</p>
            <p>Privacy statement</p>
            <p>Cookies</p>
            <p>Disclamer</p>
        </div>
      </div>
    </div>
  );
}
