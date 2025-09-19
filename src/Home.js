import './Home.css';
import './Home_media.css'
import logo from './Assets/logo.png';
import welcome from './Assets/welcome.png';
import underline from './Assets/underline.png'
import success from './Assets/success.jpeg'
import info from './Assets/info.png'
import p1 from './Assets/p1.jpg'
import backToTop from './Assets/backToTop.png'
import footerimg from './Assets/footerimage.jpeg'
import { useState,useEffect } from "react";



function Home() {
    const [dropdown,setdrop] = useState(false);
    const [menu , setmenu] = useState(false);
    const [active, setactive] = useState(1);
    const [readmore,setreadmore] = useState('Read more')
    const [scroll,setscroll] = useState(true)

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


    function Read(){
        if(readmore === "Read more"){
            setreadmore("Read less")
        }
        else{
            setreadmore("Read more")
        }
    }
      const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setscroll(true);
      console.log("scroll",scroll)
    } else {
      setscroll(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

    


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
            

            <div className="navbar">
                <div onClick={() => setactive(1)} style={{color: [1].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <h4 >Home</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(2)} style={{color: [2].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 onClick={About_dropdown} >About Us▼</h4>
                    <div style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
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
                <div onClick={() => setactive(3)} style={{color: [3].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-share" aria-hidden="true"></i>
                    <h4>Sign UP</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(4)} style={{color: [4].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <h4>Search</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(5)} style={{color: [5].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <h4>Membership</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(6)} style={{color: [6].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <h4>Success Story</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(7)} style={{color: [7].includes(active)? 'black': 'white'}} className="navitems">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h4>Contact Us</h4>
                </div>
            </div>

            <div className="Tab-nav">
                <i id="bar" onClick={menubar} class="fa-solid fa-bars"></i>            
            </div>


            <div style={{display: menu ? 'flex' : 'none'}} onClick={() => dropdown && About_dropdown()} className="second-navbar">
                <div onClick={() => setactive(1)} style={{color: [1].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <h4>Home</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(2)} style={{color: [2].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 onClick={About_dropdown}>About Us▼</h4>
                    <div style={{display: dropdown ? 'block' : 'none'}} className="dropdown">
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
                <div onClick={() => setactive(3)} style={{color: [3].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-share" aria-hidden="true"></i>
                    <h4>Sign UP</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(4)} style={{color: [4].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <h4>Search</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(5)} style={{color: [5].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <h4>Membership</h4>
                </div>
                <p>|</p>
                <div  onClick={() => setactive(6)} style={{color: [6].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <h4>Success Story</h4>
                </div>
                <p>|</p>
                <div onClick={() => setactive(7)} style={{color: [7].includes(active)? 'black': 'white'}} className="second-navitems">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h4>Contact Us</h4>
                </div>
            </div>
            
            <img className='backToTop' alt='' style={{display: scroll ? 'block' : 'none'}} src={backToTop}/>

            <div className="carousel"><div ></div></div>

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
                        <img alt="welcome" src={welcome}/>
                    </div>
                    
            </div>
            
            <div className="profiles">
                <div className="p-text">
                    <h3 id="h3">Brides & Grooms <b>Profiles</b> </h3>
                    <img alt="" className="underline" src={underline}/>
                </div>
                <div className="row">
                        <div className="column">
                            <img alt="profile" src={p1}/>
                            <h4><span>KS10081</span> 27Yrs, 5Ft 11 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_04_03_49_56b3a3de26-2271-4729-980b-8351810b9d43.jpeg&square=150'/>
                            <h4><span>PSM10075</span> 31Yrs, 5Ft 7 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_12_01_57_55Kishore1.jpg&square=150'/>
                            <h4><span>KS10074</span> 28Yrs, 6Ft</h4>
                            <h4>Finance and Accounts</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_07_28_10_58_00IMG-20250216-WA0073.jpg&square=150'/>
                            <h4><span>KS10068</span> 27Yrs, 6Ft 4 inch</h4>
                            <h4>Others</h4>
                        </div>
                        <div className="column">
                            <img alt="profile" src={p1}/>
                            <h4><span>KS10081</span> 27Yrs, 5Ft 11 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_04_03_49_56b3a3de26-2271-4729-980b-8351810b9d43.jpeg&square=150'/>
                            <h4><span>KS10081</span> 27Yrs, 5Ft 11 inch</h4>
                            <h4>IT</h4>
                        </div>
                    </div><div className="row">
                        <div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_30_06_56_35WhatsAppImage2025-05-24at7.05.41PM.jpeg&square=150'/>
                            <h4><span>KS10081</span> 27Yrs, 5Ft  inch</h4>
                            <h4>Others</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_29_11_33_431000062238.jpg&square=150'/>
                            <h4><span>KS10091</span> 25Yrs, 5Ft 5 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_09_04_01_07_52SHIVANI2.jpg&square=150'/>
                            <h4><span>KS10054</span> 22Yrs, 5Ft 12 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_30_10_16_16PHOTO-2025-08-30-15-44-56.jpg&square=150'/>
                            <h4><span>KS10071</span> 27Yrs, 5Ft 2 inch</h4>
                            <h4>Chef</h4>
                        </div>
                        <div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_09_03_59_31IMG_6690.jpeg&square=150'/>
                            <h4><span>KS10083</span> 25Yrs, 5Ft 11 inch</h4>
                            <h4>IT</h4>
                        </div><div className="column">
                            <img alt="profile" src='https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_30_06_56_35WhatsAppImage2025-05-24at7.05.41PM.jpeg&square=150'/>
                            <h4><span>KS10082</span> 26Yrs, 6Ft 8 inch</h4>
                            <h4>Designer</h4>
                        </div>
                    </div>
            </div>

            
            <div className="features">
                <div className="f-text">
                    <p id="h3">Features & <b>Policy</b> </p>
                    <img alt="" className="underline" src={underline}/>
                </div>
                <div className='row1'>
                    <div className='row'>
                            <div className='column'>
                                <i class="fa-solid fa-comments"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Free SMS & Chat</h1>
                                <p id="zero">
                                    An important facility such as chat is available in our site, so that people can interact with each other.
                                </p>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <i class="fas fa-book"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Auto Match Maker</h1>
                                <p id="zero">
                                    Some new members get registered daily. This matrimony system updates and shows you matched profile.                                </p>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <i class="fas fa-users"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Recommend Profile</h1>
                                <p id="zero" >
                                    when you follow some-one, you can see the updates of people whom you follow.                                </p>
                            </div>
                        </div>
                </div><div className='row1'>
                    <div className='row'>
                            <div className='column'>
                                <i class="far fa-calendar-alt"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Notification Alerts </h1>
                                <p id="zero" >
                                    The activities such as changing the display picture, birthday notification, photo requests.
                                </p>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <i class="fa fa-cog"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Restrictions Setting</h1>
                                <p id="zero">
                                        Restrictions Enable Copying Photos & Video Disable Anti Spam System Provided.                                </p>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <i class="far fa-clock"></i>
                            </div>
                            <div className='column1'>
                                <h1 id="zero" style={{padding:'0',margin:'0'}}>Privacy Policy</h1>
                                <p id="zero">
                                        This electronic website is being operated and owned by sriangalammanmatrimony.com                                </p>
                            </div>
                        </div>
                </div>
            </div>


            <div className="success">
                <div className="p-text">
                    <h3 id="h3">Success<b style={{fontWeight:'600'}}> Stories</b> </h3>
                    <img alt="" className="underline" src={underline}/>
                </div>
                <div className='catalogue'>
                    
                    <img alt='' src={success}/>
                    <div className='date'><p>01-11-2023</p></div>
                    <div className='name'><p>NIVETHITHA & MANOJ KUMAR </p></div>
                    <p id="read" onClick={Read}>{readmore}</p>
                </div>
            </div>
            <div className="footer">
                <div className='footer-head'>
                    
                    <img alt='' src={info}></img>
                    <p>This Website is Strictly for Matrimonial Purpose only and not a Dating Website and should not be used for posting obscene material. </p>
                </div>
                <div className='foot-bg'>
                    <div className='footer-body'>
                        <div className='col-img'>
                            <p>Sriangalammanmatrimony</p>
                            <div className='foot-img-img'>
                                <img alt='' src={footerimg}/>
                            </div>
                        </div>
                        <div className='col-contact'>
                            <p id='p'>Get in <span>Contact</span></p>
                            <p id='p1'>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
                            <h6>Book Appoinment</h6>
                            <div className='email'>
                                <input type='email' placeholder='Enter your email'></input>
                                <button type='submit'>Submit</button>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p><i class="fas fa-phone pr-1"></i>9629891299 </p>
                                    <p><i class="far fa-envelope-open pr-1"></i> info@sriangalammanmatrimony.com </p>
                                </div>
                                <div className='col'>
                                    <p>FAQ</p>
                                    <p>Terms & Condition</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='footer-tail'>
                            <p>sriangalammanmatrimony.com Matrimony - muthaliyar matrimony , matrimony service in erode , coimbatore , tirupur, salem, all caste.</p>
                            <div className='row'>
                                <i id="i1" class="fab fa-facebook-f icon-border facebook rounded-circle"></i>
                                <i id="i2" class="fab fa-telegram icon-border rss rounded-circle"></i>
                                <i id="i3" class="fab fa-twitter icon-border twitter rounded-circle"></i>
                                <i id="i4" class="fas fa-rss icon-border rss rounded-circle"></i>
                            </div>
                    </div>
                </div>
            </div>

    </div>
    )
}
export default Home;