import React, { useEffect, useState } from "react";
import "./Header.css";
import Navigator from "./Navigator";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const HomeLinks = [
        { id: 1, title: "Home", href:"#home" },
        { id: 2, title: "About Us", href:"#about" },
        { id: 3, title: "Courses", href:"#courses" },
        { id: 4, title: "Contact Us", href:"#contact" }
    ];

    return (
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="logo-container">

                    <img  src="/assets/qemer-logo1.png" alt="Qemer" />

            </div>
            <div className="navigators">
                <div className="links">
                    {HomeLinks.map((item) => (
                    <Navigator key={item.id} text={item.title} href={item.href} />
                ))}
                </div>
                <div>
                    <a href="https://www.qemertech.com/" target="_blank">
                        <button className="visit-btn">Visit Site</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
