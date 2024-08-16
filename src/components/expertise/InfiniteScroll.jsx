import React from "react";
import "../../design/expertise-design/Expertise.scss"
import Image1 from "../../assets/infiniteScroll/android-svgrepo-com.svg";
import Image2 from "../../assets/infiniteScroll/angular-svgrepo-com.svg";
import Image3 from "../../assets/infiniteScroll/azure-svgrepo-com.svg";
import Image4 from "../../assets/infiniteScroll/c-sharp-svgrepo-com.svg";
import Image5 from "../../assets/infiniteScroll/hubspot-svgrepo-com.svg";
import Image6 from "../../assets/infiniteScroll/java-svgrepo-com.svg";
import Image7 from "../../assets/infiniteScroll/python-svgrepo-com.svg";
import Image8 from "../../assets/infiniteScroll/react-svgrepo-com.svg";
import Image9 from "../../assets/infiniteScroll/salesforce-svgrepo-com.svg";
import Image10 from "../../assets/infiniteScroll/spring-svgrepo-com.svg";
import Image11 from "../../assets/infiniteScroll/swift-svgrepo-com.svg";
import Image12 from "../../assets/infiniteScroll/vue-svgrepo-com.svg";


export default function InfiniteScroll() {
    return(
       <div className="Infinite-Scroll">
       
     <h1>Website Technologie</h1>
         
         <div className="logos">
            <div className="logos-slide">
                <img src={Image1} alt="Image1" />
                <img src={Image2} alt="Image2" />
                <img src={Image3} alt="Image3" />
                <img src={Image4} alt="Image4" />
                <img src={Image5} alt="Image5" />
                <img src={Image6} alt="Image6" />
                <img src={Image7} alt="Image7" />
                <img src={Image8} alt="Image8" />
                <img src={Image9} alt="Image9" />
                <img src={Image10} alt="Image10" />
                <img src={Image11} alt="Image11" />
                <img src={Image12} alt="Image12" />
            </div>
            <div className="logos-slide">
                <img src={Image1} alt="Image1" />
                <img src={Image2} alt="Image2" />
                <img src={Image3} alt="Image3" />
                <img src={Image4} alt="Image4" />
                <img src={Image5} alt="Image5" />
                <img src={Image6} alt="Image6" />
                <img src={Image7} alt="Image7" />
                <img src={Image8} alt="Image8" />
                <img src={Image9} alt="Image9" />
                <img src={Image10} alt="Image10" />
                <img src={Image11} alt="Image11" />
                <img src={Image12} alt="Image12" />
            </div>
         </div>
          <div className="text-scroll">
            <div className="text-slide">
            <h2>CODERS WITHOUT BORDERS.</h2>
            <h2>CODERS WITHOUT BORDERS.</h2>
            <h2>CODERS WITHOUT BORDERS.</h2>
            </div>
            <div className="text-slide">
            <h2>CODERS WITHOUT BORDERS.</h2>
            <h2>CODERS WITHOUT BORDERS.</h2>
            <h2>CODERS WITHOUT BORDERS.</h2>
            </div>
          </div>
       </div>
    )
}
