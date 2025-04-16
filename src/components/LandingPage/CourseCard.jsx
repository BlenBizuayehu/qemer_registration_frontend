import { useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import "./CourseCard.css";

function CourseCard(props) {
    const navigate = useNavigate();
    
    // Function to navigate to the register page with state data
    function registerBy() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
        
        // Navigate to the register page with state data
        navigate("/register", { state: { 
            courseTitle: props.title,
            day: props.description,
            mode: props.schedule,
            price: props.price
        } });
    }

    return (
        <Container className={`course-card ${props.className || ""}`} style={props.style}>
            <div className="card-title">
                <h2>{props.title}</h2>
            </div>
            <div className="card-desc">
                {props.description}
            </div>
            <div className="card-schedule">
                {props.schedule}
            </div>
            <div className="card-price">
                {props.price}
            </div>
            <div><button onClick={registerBy} className="btn-get-started">Get Started</button></div>
        </Container>
    );
}

export default CourseCard;
