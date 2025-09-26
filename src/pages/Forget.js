import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";    
import "./Forget.css"

function forgot() {
    return(
        <div>
            <Header/>
                <div className="forgotpage">
                    <Heading text="Forgot" bold="Password" color="true"/>
                    <form>
                        <div className="forgot__column">
                            <div className="forgot__column--child">
                                <input type="email" placeholder="Enter Your Email" required/>
                            </div>
                            
                            <div className="forgot__row">
                                <button className="forgot__button" type="submit">forgot</button>
                            </div>
                        </div>
                    </form>
                </div>


            <Footer/>
        </div>
    )
}
export default forgot;