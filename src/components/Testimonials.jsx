import { useEffect, useState } from "react";
import "./Testimonials.css";
import Testimony from "./Testimony";

function Testimonials() {
    const [testimonies, setTestimonies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState("show");

    // Fetch testimonies from backend
    useEffect(() => {
        const fetchTestimonies = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/testimonials`);

                const data = await response.json();
                setTestimonies(data);
            } catch (error) {
                console.error("Error fetching testimonies:", error);
            }
        };
        fetchTestimonies();
    }, []);

    // Auto-slide effect - ONLY CHANGED THE TIMING HERE
    useEffect(() => {
        if (testimonies.length === 0) return;

        const interval = setInterval(() => {
            setTransitionClass("slide-out");

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
                setTransitionClass("slide-in");
            }, 1000); // Reduced from 800ms to 500ms

            setTimeout(() => {
                setTransitionClass("show");
            }, 1000); // Reduced from 1600ms to 1000ms
        }, 4000); // Reduced from 4000ms to 3000ms

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
                                src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${testimony.picture}`}
 
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