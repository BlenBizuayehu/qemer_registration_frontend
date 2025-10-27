import CourseCard from "./CourseCard";
import "./CourseList.css";

function CourseList(props) {
  return (
    <>
      <div className={`explore ${props.showCourses ? "animate" : ""}`}>
        {props.details.map((item, index) => (
          <CourseCard
            className="explore-item"
            key={item.id}
            title={props.title}
            description={item.mode}
            schedule={item.days}
            time={item.time}
            price={item.price}
            style={{ animationDelay: props.showCourses ? `${index * 0.1}s` : "0s" }}
          />
        ))}
      </div>
    </>
  );
}

export default CourseList;
