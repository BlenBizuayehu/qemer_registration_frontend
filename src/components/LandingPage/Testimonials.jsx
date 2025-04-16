import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Testimony from "./Testimony"; // Import the Testimony component

function Testimonials() {
    const [testimonies, setTestimonies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState("show");

    // Fetch testimonies from backend
    useEffect(() => {
        const fetchTestimonies = async () => {
            try {
                const response = await fetch("http://localhost:5003/api/testimonials");
                const data = await response.json();
                setTestimonies(data); // Set fetched testimonies
            } catch (error) {
                console.error("Error fetching testimonies:", error);
            }
        };

        fetchTestimonies();
    }, []);

    // Auto-slide effect
    useEffect(() => {
        if (testimonies.length === 0) return;

        const interval = setInterval(() => {
            setTransitionClass("slide-out");

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
                setTransitionClass("slide-in");
            }, 800);

            setTimeout(() => {
                setTransitionClass("show");
            }, 1600);
        }, 4000);

        return () => clearInterval(interval);
    }, [testimonies]);

    return (
        <div className="testimonial-section">
            <div className="testimonial-left">
                <h2>❞</h2>
                <h2>What Our Students Are Saying</h2>
            </div>
            <div className="testimonial-right">
                <div className="testimonial-container">
                    {testimonies.map((testimony, index) => (
                        <div
                            key={testimony.id}
                            className={`testimonial-item ${
                                index === currentIndex ? transitionClass : ""
                            }`}
                        >
                            <Testimony 
                                src={`http://localhost:5003/uploads/${testimony.picture}`} 
                                name={testimony.name} 
                                role={testimony.role} 
                                text={testimony.text} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
