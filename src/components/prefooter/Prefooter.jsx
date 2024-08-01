import React from "react";
import '../../design/prefooter-design/Prefooter.scss'
import Profilpic from '../../assets/Profile.png'

export default function Prefooter() {
  return (
    <div className="prefooter">
      <div className="prefooter-wrapper">

        <div className="left">
        <h1>Laten we afspreken en samen positieve impact maken!</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          condimentum libero blandit, fermentum metus a, sodales elit.
          Vestibulum tincidunt blandit est id accumsan.
        </p>
        <p className="profile-name">Spar erover met Andrea</p>
        <button>Mail</button>
        <button>Bel</button>
        <button>Whatsapp</button>
        </div>

        <div className="Profile">
          <img src={Profilpic} alt="Profile" />
        </div>

      </div>
    </div>
  );
}
