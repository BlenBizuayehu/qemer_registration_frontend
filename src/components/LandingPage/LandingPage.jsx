import React from "react";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import Courses from "./Courses";
import Home from "./Home";

import Testimonials from "./Testimonials";

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

export default LandingPage