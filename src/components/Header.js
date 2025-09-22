import './Header.css'
import logo from '../Assets/logo.png';
import { useState } from "react";

function Header(){
    const [dropdown,setdrop] = useState(false);
    const [menu , setmenu] = useState(false);
    const [active, setactive] = useState(1);

    function About_dropdown(){

        if(dropdown===false){
            setdrop(true);
        }
        else{
            setdrop(false)
        }
    }
    

    function menubar(){
        if(menu===false){
            setmenu(true);
        }
        else{
            setmenu(false)
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
                        <i className="far fa-envelope-open text-center mr-md-4 mr-sm-2 mr-8"></i>
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
                <div onClick={() => setactive(1)} style={{color: [1].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <h4 >Home</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(2)} style={{color: [2].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <h4 onClick={About_dropdown} >About Us▼</h4>
                    <div style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
                        <div>
                            <i className="fa fa-retweet"></i>
                            <h4>FAQs</h4>
                        </div> 
                        <div>
                            <i className="fa fa-check"></i>
                            <h4>Terms & Conditions</h4>
                        </div> 
                        <div>
                            <i className="fa fa-user-secret"></i>
                            <h4>Privacy Policy</h4>
                        </div> 
                        <div>
                            <i className="fa fa-credit-card"></i>
                            <h4>Refund Policy </h4>
                        </div> 
                        <div>
                            <i className="fa fa-exclamation-triangle"></i>
                            <h4>Disclaimer</h4>
                        </div> 
                        <div>
                            <i className="fa fa-ban"></i>
                            <h4>Report Misuse</h4>
                        </div> 
                            <hr/>
                        <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                            <i className="fa fa-user"></i>
                            <h4> About Us</h4>
                        </div>     
                    </div>
                    
                </div>
                <p>|</p>
                <div onClick={() => setactive(3)} style={{color: [3].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <h4>Sign UP</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(4)} style={{color: [4].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <h4>Search</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(5)} style={{color: [5].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <h4>Membership</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(6)} style={{color: [6].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <h4>Success Story</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(7)} style={{color: [7].includes(active)? 'black': 'white'}} className="navitems">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <h4>Contact Us</h4>
                </div>
            </div>

            <div className="Tab-nav">
                <i id="bar" onClick={menubar} className="fa-solid fa-bars"></i>            
            </div>


            <div style={{display: menu ? 'flex' : 'none'}} onClick={() => dropdown && About_dropdown()} className="second-navbar">
                <div onClick={() => setactive(1)} style={{color: [1].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <h4>Home</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(2)} style={{color: [2].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <h4 onClick={About_dropdown}>About Us▼</h4>
                    <div style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
                        <div>
                            <i className="fa fa-retweet"></i>
                            <h4>FAQs</h4>
                        </div> 
                        <div>
                            <i className="fa fa-check"></i>
                            <h4>Terms & Conditions</h4>
                        </div> 
                        <div>
                            <i className="fa fa-user-secret"></i>
                            <h4>Privacy Policy</h4>
                        </div> 
                        <div>
                            <i className="fa fa-credit-card"></i>
                            <h4>Refund Policy </h4>
                        </div> 
                        <div>
                            <i className="fa fa-exclamation-triangle"></i>
                            <h4>Disclaimer</h4>
                        </div> 
                        <div>
                            <i className="fa fa-ban"></i>
                            <h4>Report Misuse</h4>
                        </div> 
                            <hr/>
                        <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                            <i className="fa fa-user"></i>
                            <h4> About Us</h4>
                        </div>     
                    </div>
                    
                </div>
                <p>|</p>
                <div onClick={() => setactive(3)} style={{color: [3].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <h4>Sign UP</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(4)} style={{color: [4].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <h4>Search</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(5)} style={{color: [5].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <h4>Membership</h4>
                </div>
                <p>|</p>
                <div  onClick={() => setactive(6)} style={{color: [6].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <h4>Success Story</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(7)} style={{color: [7].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <h4>Contact Us</h4>
                </div>

            </div>
        </div>
    );
    
  

}

export default Header;