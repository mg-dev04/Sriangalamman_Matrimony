import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading  from '../components/Heading';
import './SignUp.css'

function SignUp(){
    return(
        <div>
            <Header />
            <div className='main'>
                <Heading bold={"Free Signup"}  color={true}/>
                <div className='form'>
                    <form>
                        <div className='row'>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' name='FirstName' type='text' required/>
                            </div>
                            <div className='column'>
                                <label>Surname</label>
                                <input placeholder='Surname' name='Surename' type='text' required/>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>Email</label>
                                <input placeholder='E-mail' name='Email' type='text' required/>
                            </div>
                            <div className='column'>
                                <label>Set Password</label>
                                <input placeholder='Set Password' name='SetPasword' type='text' required/>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>Matrimony Profile By</label>
                                <select name='ProfileBy'  required>
                                    <option value="" disabled selected>Select</option>
                                    <option value="Self" disabled selected>Self</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                    <option value="" disabled selected>Select</option>
                                </select>
                            </div>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                            <div className='column'>
                                <label>First Name</label>
                                <input placeholder='First Name' type='text' required/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SignUp;