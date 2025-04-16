import React from "react";
import ContactItem from "./ContactItem";
import "./ContactUs.css"; // Create this CSS file to style the section
function ContactUs() {
  const ContactInfo=[
    {
      id:1,
      src:"/icons/tg-icon.png",
      text:"@Qemer_online_training"
    },
    {
      id:2,
      src:"/icons/linkedin-icon.png",
      text:"Qemer Software Technology PLC"
    },
    {
      id:3,
      src:"/icons/phone-icon.png",
      text:"09 75 49 17 34"
    },
    {
      id:4,
      src:"/icons/location-icon.png",
      text:"Meskel Flower, Sherifa Building, 7th floor"
    }
  ]
  return (
    <div className="contact">
      <div className="image-container3">
        <img
          alt="home image"
          className="home-pic3"
          src="https://img.freepik.com/premium-photo/hands-typing-laptop-with-digital-cybersecurity-overlays-blue-orange-light-dark-background-concept-online-security-generative-ai_670147-89511.jpg"
        />
        <div className="contact-info-overlay"></div>
        <h2 className="contact-h2">Contact Us</h2>
        <div className="contact-items-container">
          {ContactInfo.map((item)=>{
            return(
              <ContactItem
            key={item.id}
            src={item.src}
            text={item.text}
          />
            )
          
          })}
        </div>
        
        <div className="wave3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,150 C780,50 760,550 1440,100 L1440,0 L0,0 Z"             ></path>
          </svg>
        </div>
        <p className="copyright">
        © All Rights Reserved  Blen Bizuayehu      2025
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
