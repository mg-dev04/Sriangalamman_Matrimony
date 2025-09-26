import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";    
import "./Login.css"

function Login() {
    return(
        <div>
            <Header/>
                <div className="loginpage">
                    <Heading bold="Login" color="true"/>
                    <form>
                        <div className="login__column">
                            <div className="login__column--child">
                                <label>Email ID. Username or Mobile No. <i class="fas fa-user"/></label>
                                <input type="email" placeholder="Username" required/>
                            </div><div className="login__column--child">
                                <label>Enter Password <i class="fas fa-unlock-alt"/></label>
                                <input type="email" placeholder="Username" required/>
                            </div>
                            <div className="login__row">
                                <p>Forgotten Password?</p>
                            </div>
                            <div className="login__row">
                                <button className="login__button" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>


            <Footer/>
        </div>
    )
}
export default Login;