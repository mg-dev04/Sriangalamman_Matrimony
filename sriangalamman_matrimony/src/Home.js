import React from "react";
import './Home.css';
import logo from './Assets/logo.png';



function Home() {
    function About_dropdown(){
        var dropdown=document.querySelector('.dropdown');
        if(dropdown.style.display==='none' || dropdown.style.display===''){
            dropdown.style.display='block';
        }
        else{
            dropdown.style.display='none';
        }
    }




    return(
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="headercontact">
                    <div className="env">
                        <i class="far fa-envelope-open text-center mr-md-4 mr-sm-2 mr-8"></i>
                    </div>
                    <div>
                        <h3>+919443946541</h3>
                        <h2>info@sriangalammanmatrimony.com</h2>
                    </div>
                </div>
                <div className="headerbuttons">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
            <div className="navbar">
                <div className="navitems">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <h4>Home</h4>
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 onClick={About_dropdown}>About Us</h4>
                     <div className="dropdown">
                        
                            <div>
                                <i class="fa fa-retweet"></i>
                                <h4>FAQs</h4>
                            </div> 
                            <div>
                                <i class="fa fa-check"></i>
                                <h4>Terms & Conditions</h4>
                            </div> 
                            <div>
                                <i class="fa fa-user-secret"></i>
                                <h4>Privacy Policy</h4>
                            </div> 
                            <div>
                                <i class="fa fa-credit-card"></i>
                                <h4>Refund Policy </h4>
                            </div> 
                            <div>
                                <i class="fa fa-exclamation-triangle"></i>
                                <h4>Disclaimer</h4>
                            </div> 
                            <div>
                                <i class="fa fa-ban"></i>
                                <h4>Report Misuse</h4>
                            </div> 
                            <hr/>
                            <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                <i class="fa fa-user"></i>
                                <h4> About Us</h4>
                            </div>
                            
                    
                    </div>
                    
                    
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-share" aria-hidden="true"></i>
                    <h4>Sign UP</h4>
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <h4>Search</h4>
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <h4>Membership</h4>
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <h4>Success Story</h4>
                </div>
                <p>|</p>
                <div className="navitems">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h4>Contact Us</h4>
                </div>
               

            </div>

            <div className="carousel"><div></div></div>

            <div className="carousel_search">
                
            </div>



            <div className="welcome"></div>
            <div className="profiles"></div>
            <div className="features"></div>
            <div className="success"></div>
            <div className="footer"></div>

    </div>
    )
}
export default Home;