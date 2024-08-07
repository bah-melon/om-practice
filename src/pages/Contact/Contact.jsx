import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Prefooter from "../../components/prefooter/Prefooter";
import Form from "../../components/form/Form";
import Profile from "../../assets/Profile.png";

export default function Contact() {
  return (
    <div className="container">
      <Navbar />
      <Form />
      <Prefooter
        heading="Laten we afspreken en samen positieve impact maken!"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum libero blandit, fermentum metus a, sodales elit. Vestibulum tincidunt blandit est id accumsan."
        title="Spar erover met Andrea"
        image={Profile}
      ></Prefooter>
      <Footer />
    </div>
  );
}
