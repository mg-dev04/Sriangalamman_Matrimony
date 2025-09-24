import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'
import './About.css'

function Report(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Report Misuse"} />
            <div className="container">
                <p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Report;