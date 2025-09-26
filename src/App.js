import { BrowserRouter,Routes,Router,Route } from "react-router-dom";

import Home from './Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Search from './pages/Search'
import Membership from './pages/Membership'
import SuccessStory from './pages/SuccessStory'
import Contact from './pages/Contact'

import FAQs from './pages/FAQs'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Disclaimer from './pages/Disclaimer'
import Report from './pages/Report'
import Login from './pages/Login'
import Forget from './pages/Forget'



function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/membership' element={<Membership/>}/>
                <Route path='/success-story' element={<SuccessStory/>}/>
                <Route path='/contact-us' element={<Contact/>}/>

                <Route path='/FAQs' element={<FAQs/>}/>
                <Route path='/terms&conditions' element={<Terms/>}/>
                <Route path='/privacy-policy' element={<Privacy/>}/>
                <Route path='/refund-policy' element={<Refund/>}/>
                <Route path='/disclaimer' element={<Disclaimer/>}/>
                <Route path='/report' element={<Report/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/forget-password' element={<Forget/>}/>



                
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;