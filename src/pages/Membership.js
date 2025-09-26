import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Border from '../components/Border'
import './membership.css'

function Membership(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Membership"} bold={"plans"}/>
            <div className="membership">
                <div className='card'>
                    <h4> BASIC<br/> <span>INR: 1200</span><br/> Offer Price: 1000<br/>Days: UNLIM</h4>
                    <p>Profile Display,<br/>

                        Chating Option<br/>

                        Express Interest<br/>

                        Unlimited Profile Search<br/>

                        Verified Phone Numbers<br/>

                        Profile Up-gradation </p>

                        <div className='card__footer'>
                            <h2>Allowed Contacts/Address: UNLIM</h2>
                            <button className='card__button'>Pay Now</button>
                        </div>
                </div>
                <div className='bankdetails'>
                    <h2>Bank Details</h2>
                    <p>Bank Name - CITY UNION BANK SIVAGIRI <br/>
                        Account Name -  S.P.SUBBIAH KAMALAKANNAN  
                        </p>
                    <p>Branch - Will be added soon <br/>
                        Account No - 500101012409753  <br/>
                        IFSC CODE - CUIB0000636   <br/>
                        Pin Code - 638109</p>
                    <h4>G-Pay: 9443946541 </h4>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Membership;