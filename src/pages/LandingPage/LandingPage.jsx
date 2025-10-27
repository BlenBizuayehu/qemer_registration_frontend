import React from "react";
import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import ContactUs from "../../components/ContactUs";
import Courses from "../../components/Courses";
import Home from "../../components/Home";
import Testimonials from "../../components/Testimonials";

function LandingPage(){
    return(
        <>
            <Home/>
            <AboutUs/>
            <Courses/>  
            <Carousel/>
            <Testimonials/>
            <ContactUs/>
        </>
    )
}

export default LandingPage;