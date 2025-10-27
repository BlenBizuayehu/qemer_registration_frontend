import React from "react"
import "./ContactItem.css"
function ContactItem(props){
    return(
        <div className="contact-item">
            <div className="contact-icon">
                <img src={props.src}/>
            </div>
            <div className="contact-text">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default ContactItem