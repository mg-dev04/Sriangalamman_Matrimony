import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading  from '../components/Heading';
import { Link } from 'react-router-dom';
import './Search.css'

function Search(){
    function Iterate(start, end){
        var array = [];
        for(let i=start; i<=end; i++){
            array.push(i);
        }
        return array;
    }

    const fAge = Iterate(18,65);

    const tAge = Iterate(18,65);

    

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
    
        

    return(
        <div>
            <Header />
            <div className='main'>
                <Heading bold={"Regular Search"}  color={true}/>
                <div className='search-form'>
                    <form>
                        <div style={{flexDirection:"column"}} className='search-row'>
                            <label>Gender</label>
                                <select name='ProfileBy' required>
                                    <option name="select" selected disabled>Select</option>
                                    <option name="Self" >Male</option>
                                    <option name="Father" >Female</option>
                            </select>
                        </div><div className='search-row'>
                            <div className='search-column'>
                                <label>Select From Age</label>
                                <select  name='fage'>
                                    <option selected disabled> Select From Age</option>
                                    {fAge.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div className='search-column'>
                                <label>Select To Age</label>
                                <select  name='tage'>
                                    <option  selected disabled> Select To Age</option>
                                    {tAge.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                        </div><div style={{flexDirection:'column'}} className='search-row'>
                                <label>Maritial Status</label>
                                <select id='select'  multiple name='Status'>
                                    <option name="select" selected disabled>Select</option>
                                    {status.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            
                        </div><div className='search-row'>
                            <div className='search-column'>
                               <label>Religion</label>
                                <select id='select'  multiple name='Religion'>
                                    <option name="select" selected disabled>Select</option>
                                    {religion.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                            <div className='search-column'>
                                <label>Caste</label>
                                <select id='select'  multiple name='Caste'>
                                    <option name="select" selected disabled>Select</option>
                                    {caste.map((d) => <option name={d} >{d}</option>)}
                                </select>
                            </div>
                        </div><div style={{marginBottom:"0"}} className='search-row'>
                            <div className='search-column'>
                                <label>Select Education</label>
                                <select id='select'  multiple name='Education'>
                                    <option value="------------------------PG-Professional Courses------------------------" disabled>
                                        ------------------------PG-Professional Courses------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="CA (Chartered Accountant)">CA (Chartered Accountant)</option>
                                    <option value="CFA (Chartered Financial Analyst)">CFA (Chartered Financial Analyst)</option>
                                    <option value="CS (Company Secretary)">CS (Company Secretary)</option>
                                    <option value="ICWA">ICWA</option>
                                    <option value="Integrated PG">Integrated PG</option>
                                    <option value="M.Arch. (Architecture)">M.Arch. (Architecture)</option>
                                    <option value="M.Ed. (Education)">M.Ed. (Education)</option>
                                    <option value="M.Lib.Sc. (Library Sciences)">M.Lib.Sc. (Library Sciences)</option>
                                    <option value="M.Plan. (Planning)">M.Plan. (Planning)</option>
                                    <option value="Master of Fashion Technology">Master of Fashion Technology</option>
                                    <option value="Master of Health Administration">Master of Health Administration</option>
                                    <option value="Master of Hospital Administration">Master of Hospital Administration</option>
                                    <option value="MBA/PGDM">MBA/PGDM</option>
                                    <option value="MCA PGDCA part time">MCA PGDCA part time</option>
                                    <option value="MCA/PGDCA">MCA/PGDCA</option>
                                    <option value="ME/M.Tech/MS (Engg/Sciences)">ME/M.Tech/MS (Engg/Sciences)</option>
                                    <option value="MFA (Fine Arts)">MFA (Fine Arts)</option>
                                    <option value="ML/LLM (Law)">ML/LLM (Law)</option>
                                    <option value="MSW (Social Work)">MSW (Social Work)</option>
                                    <option value="PG Diploma">PG Diploma</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------PG-General Courses------------------------" disabled>
                                        ------------------------PG-General Courses------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="M.Com. (Commerce)">M.Com. (Commerce)</option>
                                    <option value="M.Sc. (Science)">M.Sc. (Science)</option>
                                    <option value="MA (Arts)">MA (Arts)</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------Graduation-Professional Courses------------------------" disabled>
                                        ------------------------Graduation-Professional Courses------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="B.Arch (Architecture)">B.Arch (Architecture)</option>
                                    <option value="B.Ed (Education)">B.Ed (Education)</option>
                                    <option value="B.El.Ed (Elementary Education)">B.El.Ed (Elementary Education)</option>
                                    <option value="B.Lib.Sc (Library Sciences)">B.Lib.Sc (Library Sciences)</option>
                                    <option value="B.P.Ed. (Physical Education)">B.P.Ed. (Physical Education)</option>
                                    <option value="B.Plan (Planning)">B.Plan (Planning)</option>
                                    <option value="Bachelor of Fashion Technology">Bachelor of Fashion Technology</option>
                                    <option value="BBA/BBM/BBS">BBA/BBM/BBS</option>
                                    <option value="BCA (Computer Application)">BCA (Computer Application)</option>
                                    <option value="BE B.Tech (Engineering)">BE B.Tech (Engineering)</option>
                                    <option value="BFA (Fine Arts)">BFA (Fine Arts)</option>
                                    <option value="BHM (Hotel Management)">BHM (Hotel Management)</option>
                                    <option value="BL/LLB/BGL (Law)">BL/LLB/BGL (Law)</option>
                                    <option value="BSW (Social Work)">BSW (Social Work)</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------Graduation-General Courses------------------------" disabled>
                                        ------------------------Graduation-General Courses------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="B.A. (Arts)">B.A. (Arts)</option>
                                    <option value="B.Com (Commerce)">B.Com (Commerce)</option>
                                    <option value="B.Sc (Science)">B.Sc (Science)</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------Medicine (General/Dental/Surgeon)------------------------" disabled>
                                        ------------------------Medicine (General/Dental/Surgeon)------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="B.A.M.S (Bachelor of Ayurvedic Medicine and Surgery)">B.A.M.S (Bachelor of Ayurvedic Medicine and Surgery)</option>
                                    <option value="B.Pharm (Pharmacy)">B.Pharm (Pharmacy)</option>
                                    <option value="B.V.Sc. (Veterinary Science)">B.V.Sc. (Veterinary Science)</option>
                                    <option value="BDS (Dental Surgery)">BDS (Dental Surgery)</option>
                                    <option value="BHMS (Homeopathy)">BHMS (Homeopathy)</option>
                                    <option value="M.Pharm. (Pharmacy)">M.Pharm. (Pharmacy)</option>
                                    <option value="M.V.Sc. (Veterinary Science)">M.V.Sc. (Veterinary Science)</option>
                                    <option value="MBBS">MBBS</option>
                                    <option value="MD/ MS (Medicine)">MD/ MS (Medicine)</option>
                                    <option value="MDS (Master of Dental Surgery)">MDS (Master of Dental Surgery)</option>
                                    <option value="BPT (Physiotherapy)">BPT (Physiotherapy)</option>
                                    <option value="MPT (Physiotherapy)">MPT (Physiotherapy)</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------Doctorate (Phd)------------------------" disabled>
                                        ------------------------Doctorate (Phd)------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="M.Phil. (Philosophy)">M.Phil. (Philosophy)</option>
                                    <option value="Ph.D. (Doctorate)">Ph.D. (Doctorate)</option>
                                    <option value="Other Doctorate">Other Doctorate</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------Diploma Courses------------------------" disabled>
                                        ------------------------Diploma Courses------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="Arts/ Graphic Designing">Arts/ Graphic Designing</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Fashion/ Design">Fashion/ Design</option>
                                    <option value="Languages">Languages</option>
                                    <option value="Pilot Licenses">Pilot Licenses</option>
                                    <option value="Other Diploma">Other Diploma</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------12th but not pursuing graduation------------------------" disabled>
                                        ------------------------12th but not pursuing graduation------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="12th">12th</option>

                                    <option value="" disabled></option>
                                    <option value="------------------------10th but not pursuing 12th------------------------" disabled>
                                        ------------------------10th but not pursuing 12th------------------------
                                    </option>
                                    <option value="" disabled></option>
                                    <option value="10th">10th</option>
                                    <option value="Mass communications">Mass communications</option>
                                    <option value="CA Appear">CA Appear</option>
                                    <option value="BMS(Bachelor Of Management Studies)">BMS (Bachelor Of Management Studies)</option>

                                </select>
                            </div>
                            <div className='search-column'>
                                <label>Select Occupation</label>
                            <select id='select'  multiple name='Occupation'>
                                <option value="Advertising/ Entertainment/ Media">Advertising/ Entertainment/ Media</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Architecture &amp; Design">Architecture &amp; Design</option>
                                <option value="Artists">Artists</option>
                                <option value="Animators &amp; Web Designers">Animators &amp; Web Designers</option>
                                <option value="Banking">Banking</option>
                                <option value="Insurance &amp; Financial Services">Insurance &amp; Financial Services</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Fashion &amp; Jewellery Designers">Fashion &amp; Jewellery Designers</option>
                                <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                                <option value="Civil Services / Law Enforcement">Civil Services / Law Enforcement</option>
                                <option value="Construction">Construction</option>
                                <option value="Customer Service/ Call Centre/BPO">Customer Service/ Call Centre/BPO</option>
                                <option value="Defence">Defence</option>
                                <option value="Education/ Training">Education/ Training</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Export/ Import">Export/ Import</option>
                                <option value="Finance and Accounts">Finance and Accounts</option>
                                <option value="Government Employee">Government Employee</option>
                                <option value="Health Care">Health Care</option>
                                <option value="Hotels/ Restaurants">Hotels/ Restaurants</option>
                                <option value="Human Resource">Human Resource</option>
                                <option value="IT">IT</option>
                                <option value="Legal">Legal</option>
                                <option value="Loss Prevention Manager">Loss Prevention Manager</option>
                                <option value="Management / Corporate Professionals">Management / Corporate Professionals</option>
                                <option value="Manufacturing/ Engineering/ R&amp;D">Manufacturing/ Engineering/ R&amp;D</option>
                                <option value="Marketing and Communications">Marketing and Communications</option>
                                <option value="Merchant Navy">Merchant Navy</option>
                                <option value="Non Working">Non Working</option>
                                <option value="Oil &amp; Gas">Oil &amp; Gas</option>
                                <option value="Others">Others</option>
                                <option value="Pharmaceutical/ Biotechnology">Pharmaceutical/ Biotechnology</option>
                                <option value="Purchase/ Logistics/ Supply chain">Purchase/ Logistics/ Supply chain</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Retail Chains">Retail Chains</option>
                                <option value="Sales/ Business Development">Sales/ Business Development</option>
                                <option value="Science">Science</option>
                                <option value="Telecom/ ISP">Telecom/ ISP</option>
                                <option value="Travel/ Airlines">Travel/ Airlines</option>
                                <option value="Others">Others</option>
                            </select>

                            </div>
                        </div>
                        <div className='search-row1'>
                            <div className='search-column1'>
                                <div style={{flexDirection:"row"}} className='Any'>
                                    <input id='input' type="checkbox" name="Education" value="any" />
                                    <h5>Any</h5>
                                </div>
                                <p style={{margin:'0',padding:'0'}}>Please use Ctrl+ for multiple selection</p>
                            </div><div id="hide" className='search-column1'>
                                <div style={{flexDirection:"row"}} className='Any'>
                                    <input id='input' type="checkbox" name="Occupation" value="any" />
                                    <h5>Any</h5>
                                </div>
                                <p style={{margin:'0',padding:'0'}}>Please use Ctrl+ for multiple selection</p>
                            </div>
                        </div>
                        <div  style={{marginBottom:"25px"}} className='Any'>
                            <input id='input' className='photo' type="checkbox" name="photo" value={true} />
                            <h5>With Photo</h5>
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

export default Search;