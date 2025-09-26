import './Header.css'
import logo from '../Assets/logo.png';
import { useState } from "react";
import { Link, useNavigate ,useLocation} from 'react-router-dom'; 

function Header(){
    const [dropdown,setdrop] = useState(false);
    const [menu , setmenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


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

    function Navigate(event){
        var page = event.target.textContent
        if(page === "Home"){
            navigate('/')
            
        }
        else if(page === "Sign UP"){
            
            navigate('/sign-up')
            
        }else if(page === "Search"){
            navigate('/search')
            
        }else if(page === "Membership"){
            navigate('/membership')
            
        }else if(page === "Success Story"){
            navigate('/success-story')
            
        }else if(page === "Contact Us"){
            navigate('/contact-us')
            
        }else if(page === "FAQs"){
            navigate('/FAQs')
        }else if(page === "Terms & Conditions"){
            navigate('/terms&conditions')
        }else if(page === "Privacy Policy"){
            navigate('/privacy-policy')
        }else if(page === "Refund Policy"){
            navigate('/refund-policy')
        }else if(page === "Disclaimer"){
            navigate('/disclaimer')
        }else if(page === "Report Misuse"){
            navigate('/report')
        }else if(page === "About Us"){
            navigate('/about')
        }
    }
    
    
    return(
        <div>
            <div className="header">
                <div className="logo">
                   <Link to='/'><img  src={logo} alt="logo"/></Link> 
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
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/sign-up'><button>Register</button></Link>
                </div>
            </div>
            
           
                <div className="navbar">
                    
                    <div onClick={Navigate} style={{color: location.pathname ==="/" ? 'black' : 'white'}} className="navitems">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <h4>Home</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: (location.pathname === "/FAQs" ||location.pathname === "/terms&conditions" ||location.pathname === "/privacy-policy" ||location.pathname === "/refund-policy" ||location.pathname === "/disclaimer" ||location.pathname === "/report" || location.pathname ==="/about"  ) ? 'black' : 'white'}} className="navitems">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <h4 onClick={About_dropdown} >About Us▼</h4>
                        
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/sign-up" ? 'black' : 'white'}}  className="navitems">
                        <i className="fa fa-share" aria-hidden="true"></i>
                        <h4>Sign UP</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/search" ? 'black' : 'white'}} className="navitems">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <h4>Search</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/membership" ? 'black' : 'white'}} className="navitems">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        <h4>Membership</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/success-story" ? 'black' : 'white'}} className="navitems">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <h4>Success Story</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate}  style={{color: location.pathname ==="/contact-us" ? 'black' : 'white'}}className="navitems">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h4>Contact Us</h4>
                    </div>
                </div>

                <div className="Tab-nav">
                    <i id="bar" onClick={menubar} className="fa-solid fa-bars"></i>            
                </div>


                <div style={{display: menu ? 'flex' : 'none'}} onClick={() => dropdown && About_dropdown()} className="second-navbar">
                    <div onClick={Navigate} style={{color: location.pathname ==="/" ? 'black' : 'white'}} className="second-navitems">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <h4>Home</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: (location.pathname === "/FAQs" ||location.pathname === "/terms&conditions" ||location.pathname === "/privacy-policy" ||location.pathname === "/refund-policy" ||location.pathname === "/disclaimer" ||location.pathname === "/report" || location.pathname ==="/about"  ) ? 'black' : 'white'}}  className="second-navitems">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <h4 onClick={About_dropdown}>About Us▼</h4>
                        <div style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
                            <center>
                                <div >
                                    <i className="fa fa-retweet"></i>
                                    <h4 onClick={Navigate}>FAQs</h4>
                                </div> 
                                <div>
                                    <i className="fa fa-check"></i>
                                    <h4 onClick={Navigate}>Terms & Conditions</h4>
                                </div> 
                                <div>
                                    <i className="fa fa-user-secret"></i>
                                    <h4 onClick={Navigate}>Privacy Policy</h4>
                                </div> 
                                <div>
                                    <i className="fa fa-credit-card"></i>
                                    <h4 onClick={Navigate}>Refund Policy</h4>
                                </div> 
                                <div>
                                    <i className="fa fa-exclamation-triangle"></i>
                                    <h4 onClick={Navigate}>Disclaimer</h4>
                                </div> 
                                <div>
                                    <i className="fa fa-ban"></i>
                                    <h4 onClick={Navigate}>Report Misuse</h4>
                                </div> 
                                    <hr/>
                                <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                    <i className="fa fa-user"></i>
                                    <h4 onClick={Navigate}>About Us</h4>
                                </div>     
                                </center>
                        </div>
                        
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/sign-up" ? 'black' : 'white'}} className="second-navitems">
                        <i className="fa fa-share" aria-hidden="true"></i>
                        <h4>Sign UP</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/search" ? 'black' : 'white'}} className="second-navitems">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <h4>Search</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/membership" ? 'black' : 'white'}} className="second-navitems">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        <h4>Membership</h4>
                    </div>
                    <p>|</p>
                    <div  onClick={Navigate} style={{color: location.pathname ==="/success-story" ? 'black' : 'white'}} className="second-navitems">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <h4>Success Story</h4>
                    </div>
                    <p>|</p>
                    <div onClick={Navigate} style={{color: location.pathname ==="/contact-us" ? 'black' : 'white'}}  className="second-navitems">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h4>Contact Us</h4>
                    </div>

                </div>
                
                <div id='desk-drop' style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
                            <div>
                                <i className="fa fa-retweet"></i>
                                <h4 onClick={Navigate}>FAQs</h4>
                            </div> 
                            <div>
                                <i className="fa fa-check"></i>
                                <h4 onClick={Navigate}>Terms & Conditions</h4>
                            </div> 
                            <div>
                                <i className="fa fa-user-secret"></i>
                                <h4 onClick={Navigate}>Privacy Policy</h4>
                            </div> 
                            <div>
                                <i className="fa fa-credit-card"></i>
                                <h4 onClick={Navigate}>Refund Policy</h4>
                            </div> 
                            <div>
                                <i className="fa fa-exclamation-triangle"></i>
                                <h4 onClick={Navigate}>Disclaimer</h4>
                            </div> 
                            <div>
                                <i className="fa fa-ban"></i>
                                <h4 onClick={Navigate}>Report Misuse</h4>
                            </div> 
                                <hr/>
                            <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                <i className="fa fa-user"></i>
                                <h4 onClick={Navigate}>About Us</h4>
                            </div>     
                        </div>
        </div>
    );
    
  

}

export default Header;