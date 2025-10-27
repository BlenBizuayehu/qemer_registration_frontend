import React from "react";
import "./Navigator.css";
function Navigator(props){
    
    return(
        <span className="menu-title">
            <a href={props.href}>{props.text}</a>
        </span>
    )
}
export default Navigator;