import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const location = useLocation();
    const navigate = useNavigate();
    const courseFromPrevPage = location.state || {};

    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Course] = useState(courseFromPrevPage.courseTitle || "");
    const [Day] = useState(courseFromPrevPage.day || "");
    const [Mode] = useState(courseFromPrevPage.mode || "");
    const [Price] = useState(courseFromPrevPage.price || "");
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [clickedField, setClickedField] = useState("");
    
    // Refs to keep track of the input fields and the warning box
    const inputRefs = {
        course: useRef(null),
        days: useRef(null),
        mode: useRef(null),
        price: useRef(null),
    };
    const warningBoxRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5003/api/requests', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Name,
              Phone,
              Course,
              Day,
              Mode,
              Price
            }),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          console.log('Success:', data);
          setIsOpen(true);
          setName("");
          setPhone("");
        } catch (error) {
          console.error('Error:', error);
          alert('There was an error submitting your form. Please try again.');
        }
      };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 500); // Give enough time for slide-out animation
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
    };

    // Function to handle the click event on fields
    const handleFieldClick = (field) => {
        setClickedField(field);  // Store the clicked field to show the warning
    };

    const renderWarningBox = (field) => {
        return clickedField === field ? (
            <div className="warning-box" ref={warningBoxRef}>
                Go back and select another available schedule if you want to change this value.
            </div>
        ) : null;
    };

    // Close warning box if clicked outside
    const handleClickOutside = (event) => {
        if (
            warningBoxRef.current && !warningBoxRef.current.contains(event.target) && 
            !Object.values(inputRefs).some(ref => ref.current && ref.current.contains(event.target))
        ) {
            setClickedField("");  // Close the warning box when clicking outside
        }
    };

    // Add event listener on component mount
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleBackButton = () => {
        window.history.back(); // Go back without triggering scroll to top
    };

    return (
        <div>
            {/* Header with Back Button */}
            <div className="header2">
                <div><img className="logo" src="/assets/qemer-logo1.png"/></div>
                <div><button className="back-button" onClick={handleBackButton}>← Back</button></div>
            </div>

            <div className="image-container2">
                <img
                    alt="home image"
                    className="home-pic2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rBDh9OtW305GY4Pl1IFIX1LwfSKKmVOv4JtZAXLM1FJK126gKuaxPc_7XZtUFMDAEhU&usqp=CAU"
                />
                <div className="overlay4"></div>
                <div className="wave4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,200 C480,-100 960,550 1440,200 L1440,320 L0,320 Z"></path>
                    </svg>
                </div>
            </div>

            <form className="registration-form" onSubmit={handleSubmit}>
                <h1>Register Here</h1>

                <label htmlFor="name">Enter Your Full Name:</label>
                <input type="text" id="name" name="name" required value={Name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="phone">Enter Your Phone Number:</label>
                <input type="text" id="phone" name="phone" required value={Phone} onChange={(e) => setPhone(e.target.value)} />

                {["course", "days", "mode", "price"].map((field) => (
                    <div key={field} className="readonly-container">
                        <label htmlFor={field}>
                            {field === "course" ? "Course to study:" :
                             field === "days" ? "Chosen schedule:" :
                             field === "mode" ? "Mode of study:" : "Price:"}
                        </label>
                        <input
                            type="text"
                            id={field}
                            name={field}
                            value={field === "course" ? Course : field === "days" ? Day : field === "mode" ? Mode : Price}
                            readOnly
                            onClick={() => handleFieldClick(field)}  // Handle field click
                            ref={inputRefs[field]}  // Attach refs
                        />
                        {renderWarningBox(field)}  {/* Render warning box when clicked */}
                    </div>
                ))}

                <button type="submit">Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>

            {/* Slide-in Popup */}
            {isOpen && (
                <div className={`slide-in ${isClosing ? "slide-out" : ""}`}>
                    <p>Thank You, {Name}</p>
                    <span>Your application is submitted, we will contact you as soon as possible.</span>
                    <button className="btn-close-slide-in" onClick={handleClose}>Close</button>
                </div>
            )}

            <div className="image-container3">
                <img
                    alt="home image"
                    className="home-pic3"
                    src="https://img.freepik.com/premium-photo/hands-typing-laptop-with-digital-cybersecurity-overlays-blue-orange-light-dark-background-concept-online-security-generative-ai_670147-89511.jpg"
                />
                <div className="contact-info-overlay2"></div>
                <div className="copyright2">
                    <p >© 2024 </p > <p>All rights reserved.</p><p>Blen Bizuayehu.</p>
                </div>

                <div className="wave3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,250 C480,100 960,550 1440,200 L1440,0 L0,0 Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Register;
