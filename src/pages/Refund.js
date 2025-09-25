import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'
import './About.css'

function Refund(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Returns and Cancellation "}/>
            <div className='container'>
                <p>We do not entertain Return, Refund and Cancellation in any Circumstances.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Refund;