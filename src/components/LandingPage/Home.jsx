import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("./register");
  };

  return (
    <div id="home">
      <Header />
      <div className="image-container">

          
      <img className="home-pic" src="/assets/home-pic.jpg" alt="home image" />

        <div className="overlay"></div>
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,200 C480,-100 960,550 1440,200 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="home">
        <div className="home-text">
          <h1 className="heading1">Join the Future Today.</h1>
          <p className="heading2">
            Qemer helps you level up your tech skills
            <br />
            and accelerate your journey to expertise.
          </p>
        </div>
        {/* use the link component of the router package not a button with a function */}
        <a href="#courses"><button className="btnRegister"> 
          Register
        </button>
        </a>
      </div>
      <div className="home-slogan">
        <h1>Master In-Demand Tech Skills for a Future-Ready Career</h1>
        <h3>
          Join over 20 batches of Graphics design and 10 batches of web
          development and programming trainees.
        </h3>
      </div>
    </div>
  );
}

export default Home;
