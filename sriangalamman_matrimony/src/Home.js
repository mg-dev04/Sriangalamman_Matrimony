import React from "react";
import './Home.css';
import './Home_media.css'
import logo from './Assets/logo.png';
import welcome from './Assets/welcome.png';
import underline from './Assets/underline.png'
import { useState } from "react";




function Home() {
    function About_dropdown(){
        var dropdown=document.querySelector('.dropdown');
        var home = document.querySelector('.home');
        home.addEventListener('click',()=>{
            if(dropdown.style.display==='block')
                dropdown.style.display='none';
                home.removeEventListener('click',this);
            })
        if(dropdown.style.display==='none' || dropdown.style.display===''){
            dropdown.style.display='block';
        }
        else{
            dropdown.style.display='none';
        }
    }


    const range = (start, end, step = 1) => {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (_, i) => start + i * step);
    };



    return(
        <div className="home">
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
            <div className="Tab-nav">
                <i id="bar" class="fa-solid fa-bars"></i>            
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

            <div className="carousel_search" style={{marginLeft:'100px',marginRight:'100px'}}>
                <div className="carousel_search_items">
                    <h3>I'm looking for a</h3>
                    <select>
                        <option>Bride</option>
                        <option>Groom</option>
                    </select>
                </div>
                <div className="carousel_search_items">
                    <h3>From Age</h3>
                    <select defaultValue={20}>
                        {range(18, 65, 1).map(num => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                            ))}

                    </select>
                </div>
                <div className="carousel_search_items">
                    <h3>To Age</h3>
                    <select defaultValue={28}>
                        {range(18, 65, 1).map(num => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                            ))}
                    </select>
                </div>
                <div className="carousel_search_items">
                    <h3>of religion</h3>
                    <select defaultValue={'Any'}>
                        <option>Any</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christan</option>
                        <option>sikh</option>
                        <option>Budhism</option>
                        <option>Jain</option>
                        <option>Bhramin</option>
                    </select>
                </div>
                <div className="carousel_search_items">
                    <h3>and caste</h3>
                    <select>
                        <option>Any</option>
                        <option>Devar</option>
                        <option>Bhramin</option>
                        <option>Gounder</option>
                        <option>Nadar</option>
                        <option>Nayakar</option>
                        <option>Pillai</option>
                        <option>Viswagarma</option>
                        <option>Chettiyar</option>
                        <option>Mudaliar</option>
                    </select>
                </div>
                <div className="carousel_search_items">
                    <button>Search Partner</button>
                </div>
            </div>


            <div className="welcome">
                    <div className="text">
                        <h1>Welcome to Sriangalamman Matrimony</h1>
                        <p><b>Sriangalamman Matrimony,</b> is one of India’s leading online premium matrimonial websites which will help thousands of all Community members find their perfect life partner. <br /><p></p>Sriangalamman Matrimony  is the most trusted matrimony service for thousands who are in search of life partners in India & Worldwide.</p>
                        <p style={{display:'inline'}}>...<p style={{color:'#489bffff',display:'inline'}}>Read More</p></p>
                    </div>
                    <div className="img">
                        <img src={welcome}/>
                    </div>
            </div>
            <div className="profiles">
                <div className="p-text">
                    <h3 id="h3">Brides & Grooms <b>Profiles</b> </h3>
                    <img className="underline" src={underline}/>
                </div>
                <div></div>
            </div>
            <div className="features"></div>
            <div className="success"></div>
            <div className="footer"></div>

    </div>
    )
}
export default Home;