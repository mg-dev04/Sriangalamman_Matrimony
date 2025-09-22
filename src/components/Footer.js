import './Footer.css'

import info from '../Assets/info.png'
import footerimg from '../Assets/footerimage.jpeg'

function Footer(){


    return(
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
                                    <p><i className="fas fa-phone pr-1"></i>9629891299 </p>
                                    <p><i className="far fa-envelope-open pr-1"></i> info@sriangalammanmatrimony.com </p>
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
                                <i id="i1" className="fab fa-facebook-f icon-border facebook rounded-circle"></i>
                                <i id="i2" className="fab fa-telegram icon-border rss rounded-circle"></i>
                                <i id="i3" className="fab fa-twitter icon-border twitter rounded-circle"></i>
                                <i id="i4" className="fas fa-rss icon-border rss rounded-circle"></i>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;