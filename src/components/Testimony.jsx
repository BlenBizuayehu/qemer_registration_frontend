import "./Testimony.css";

function Testimony(props){
    return(
        <div className="testimony">
            <div className="testimonial-author">
                <div>
                    <img src={props.src}  alt={props.name}  
                    className="testimonial-avatar"                 
                    onError={(e) => {
                      e.target.src = '/assets/picon.png';}}
                      />
                </div>
                <p>{props.name}</p>
            </div>
            <div>
                <p className="testimony-text">
                    {props.text}
                </p>
            </div>
            <div>
             <p className="role">{props.role}</p>
            </div>
        </div>
    )
}

export default Testimony;
