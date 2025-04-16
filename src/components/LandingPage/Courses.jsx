import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import "./Courses.css";

function Courses() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5003/api/courses');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
        setError(null);
      } catch (error) {
        console.error('Fetch Error:', error);
        setError('Failed to load courses. Please try again.');
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
    <div className="courses" id="courses">
      <div className="courses-title">
        <h1>Courses</h1>
      </div>
        
        {courses.map((item, index) => (
          <>
          <CourseItem
            key={item._id}
            courseId={item._id}
            title={item.courseName}
            description={item.courseDesc}
            duration={item.duration}
            imageSource={`http://localhost:5003/${item.courseImg}`}
            courses={courses}
            alternate={index % 2 === 0} // Pass alternate prop
          />
          </>
        ))}
      </div>
      <h2>
          Embrace the challenge of problem-solving and creativity as you craft innovative
          solutions for the digital world. Join a vibrant community of learners and experts
          who inspire each other to grow. Start your journey today and shape the future of technology!
        </h2>
    </>
    
  );
}

export default Courses;
