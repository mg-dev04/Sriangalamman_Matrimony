import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'
import './Contact.css'


function Contact(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Contact Us "} />
            <div className="container">
                    <div className="contact-row">
                        <div className="contact-col">
                            <i class="fas fa-map-marker-alt rounded-circle"></i>
                            <h3>Address</h3>
                            <h5> SRI ANGALAMMAN MATRIMONY,<br/>

                                    108, ANNA STREET,<br/>

                                    SIVAGIRI, ERODE(DT),<br/>

                                    TAMILNADU,<br/>

                                    PINCODE -638109</h5>
                        </div>
                        <div className="contact-col">
                            <i class="fas fa-phone rounded-circle"></i>
                            <h3>Call Us</h3>
                            <p>9629891299<br/>
                                9629891299 (Whats App) </p>
                        </div>
                        <div className="contact-col">
                            <i class="fas fa-envelope-open rounded-circle"></i>
                            <h3>Email</h3>
                            <p>info@sriangalammanmatrimony.com</p>
                        </div>
                    </div>
                    <div className="form">
                        <form>
                            <div className='contact-row1'>
                                <div className='contact-col1'>
                                    <label>First Name</label>
                                    <input className='input'  type="text" name="fname"/>
                                </div> <div className='contact-col1'>
                                    <label>Last Name</label>
                                    <input className='input' type="text" name="lname"/>
                                </div>
                            </div><div className='contact-row1'>
                                <div className='contact-col1'>
                                    <label>Subject</label>
                                    <input className='input' type="text" name="subject"/>
                                </div> <div className='contact-col1'>
                                    <label>E-mail</label>
                                    <input className='input' type="text" name="mail"/>
                                </div>
                            </div>
                            <div style={{flexDirection:"column"}} className='contact-row1'>
                                <label>Message</label>
                                <div style={{padding:"6px"}} className='contact-col1'>
                                    <textarea className='textarea' name="message"></textarea>
                                </div>
                            </div>
                            <button id='but' type="submit">Submit</button>
                        </form>
                    </div>

            </div>
            <Footer />
        </div>
    )
}

export default Contact;