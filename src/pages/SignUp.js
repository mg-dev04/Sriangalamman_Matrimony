import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading  from '../components/Heading';
import { Link } from 'react-router-dom';
import './SignUp.css'

function SignUp(){
    function Iterate(start, end){
        var array = [];
        for(let i=start; i<=end; i++){
            array.push(i);
        }
        return array;
    }

    const days = Iterate(1,31);

    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    const status =[
        "Unmarried",
        "Divorced",
        "Widower",
        "Widowed",
        "Awaiting Divorce",
        "Separated"
        ]
    const religion =[
        "Hindu",
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhism",
        "Jain",
        "Brahmin"
        ]
    const caste =[
        "Bramin",
        "Devar",
        "Gounder",
        "Nadar",
        "Nayakar",
        "Pillai",
        "Viswagarama",
        "chettiyar",
        "Mudaliar"
        ]
    const countrycode =[
            "(+91) India",
            "(+1) United States",
            "(+44) United Kingdom",
            "(+86) China",
            "(+61) Australia",
            "(+81) Japan",
            "(+49) Germany",
            "(+33) France",
            "(+7) Russia",
            "(+55) Brazil",
            "(+52) Mexico",
            "(+62) Indonesia",
            "(+82) South Korea",
            "(+92) Pakistan",
            "(+234) Nigeria",
            "(+20) Egypt",
            "(+880) Bangladesh",
            "(+39) Italy",
            "(+34) Spain",
            "(+27) South Africa"
            ]

    console.log();

    const years = Iterate(new Date().getFullYear() -50, new Date().getFullYear() -18);

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
                                <select name='ProfileBy' required>
                                    <option name="select" selected disabled>Select</option>
                                    <option name="Self" >Self</option>
                                    <option name="Father" >Father</option>
                                    <option name="Mother" >Mother</option>
                                    <option name="Brother" >Brother</option>
                                    <option name="Sister" >Sister</option>
                                    <option name="Friend" >Friend</option>
                                    <option name="Son" >Son</option>
                                    <option name="Daughter" >Daughter</option>
                                    <option name="others" >others</option>
                                </select>
                            </div>
                            <div className='column'>
                                <label>Gender</label>
                                <select name='ProfileBy' required>
                                    <option name="select" selected disabled>Select</option>
                                    <option name="Self" >Male</option>
                                    <option name="Father" >Female</option>
                                </select>
                            </div>
                        </div><div className='row'>
                            <div style={{width:'32%'}} className='column'>
                                <label>Date of Birth</label>
                                <select name='day'>
                                    <option name="select" selected disabled>Select Day</option>
                                    {days.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div style={{width:'32%'}} className='column'>
                                <label>Month</label>
                                <select name='Month'>
                                    <option name="select" selected disabled>Select Month</option>
                                    {months.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div style={{width:'32%'}} className='column'>
                                <label>Year</label>
                                <select name='Year'>
                                    <option name="select" selected disabled>Select Year</option>
                                    {years.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>Maritial Status</label>
                                <select name='Status'>
                                    <option name="select" selected disabled>Select</option>
                                    {status.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div className='column'>
                                <label>Religion</label>
                                <select name='Religion'>
                                    <option name="select" selected disabled>Select</option>
                                    {religion.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                        </div><div className='row'>
                            <div className='column'>
                                <label>Caste</label>
                                <select name='Caste'>
                                    <option name="select" selected disabled>Select</option>
                                    {caste.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div className='column'>
                                <label>Enter Subcaste</label>
                                <input placeholder='Enter Subcaste' name="Subcaste" type='text' required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='column'>
                                <label>Country code</label>
                                <select name='code'>
                                    <option name="select" selected disabled>Select</option>
                                    {countrycode.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div className='column'>
                                <label>Mobile Number</label>
                                <input placeholder='Enter Mobile Number' name='ph' type='text' required/>
                            </div>
                        </div>
                        <div className='textarea'>
                            <label> Enter Few Lines About Yourself</label>
                            <textarea name='about' type='textarea'></textarea>
                        </div>
                        <div className='row'>
                            <div class='agree'>
                                <input type='checkbox' required/>
                                <p> I agree to the terms of service</p>
                            </div>
                        </div>
                        <button className='submit' type='submit' name='Submit'>Submit</button>
                        <p>Already have an account?<Link id="link"> Login Now!</Link></p>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SignUp;