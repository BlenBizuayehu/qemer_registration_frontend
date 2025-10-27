import { useState } from "react";
import Container from "../UI/Container";
import "./CourseItem.css";
import CourseList from "./CourseList";

function CourseItem({  courseId, title, description, duration, imageSource, courses, alternate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState([]); // Initialize the details state

  // Handle the toggle for showing details
  function handleOpen() {
    setIsOpen(!isOpen);
    console.log(imageSource);


    // If toggling open, fetch the details for the course
    if (!isOpen) {
      const courseDetails = courses.find((course) => course._id === courseId);
      if (courseDetails) {
        setDetails(courseDetails.schedule);
        console.log(courseDetails.schedule); 
      }
    }
  }

  const [showCourseList, setShowCourseList] = useState(false);
  const handleExploreClick = () => {
    setShowCourseList(!showCourseList);}

  return (
    <>
      <>
      {isOpen ? (
        <>
        <Container className={`course-item ${alternate ? "reverse" : ""}`}>
          <div className="course-img-container">
            <img className="course-image" src={imageSource} alt={title} />
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            
          </div>
          <div className="course-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="btn-container">
              <div className="duration">Duration: {duration}</div>
              <div>
                <button onClick={()=>{handleOpen();handleExploreClick();} }className="btn-explore">
                {isOpen ? <span>Show Less</span> : <span>Explore</span>}
              </button>
              </div>
            </div>
          </div>
          </Container>
          <CourseList
          title={title}
          details={details}
          ShowCourseList={showCourseList}/>
          </>
      ) : (
        <Container className={`course-item ${alternate ? "reverse" : ""}`}>
          <div className="course-img-container">
            <img className="course-image" src={imageSource} alt={title} />
            <div className="corner tl"></div>
            <div className="corner tr"></div>
          </div>
          <div className="course-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="btn-container">
              <span className="duration">Duration: {duration}</span>
              <button onClick={handleOpen} className="btn-explore">
                {isOpen ? <span>Show Less</span> : <span>Explore</span>}
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
    </>
    
  );
}

export default CourseItem;
