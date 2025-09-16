import React from "react";
import './Home.css';
import logo from './logo.png';

function Home() {
    return(
    <div className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="headercontact">
            <h3>+919443946541</h3>
            <h2>info@sriangalammanmatrimony.com</h2>
        </div>
        <div className="headerbuttons">
            <button>Login</button>
            <button>Register</button>
        </div>
    </div>
    )
}
export default Home;