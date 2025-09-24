import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'
import './About.css'

function About(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"About Us"} />
            <div className="container">
                <p><b>Sriangalamman Matrimony,</b> is one of India’s leading online premium matrimonial websites which will help thousands of all Community members find their perfect life partner. </p>
                <p>Sriangalamman Matrimony  is the most trusted matrimony service for thousands who are in search of life partners in India & Worldwide.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;