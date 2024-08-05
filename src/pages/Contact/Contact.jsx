import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Prefooter from "../../components/prefooter/Prefooter";
import Form from "../../components/form/Form";

export default function Contact(){
    return (
        <div>
            <Navbar />
            <Form />
            <Prefooter/>
            <Footer />
        </div>
    )
}