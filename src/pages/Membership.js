import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Border from '../components/Border'

function Membership(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Membership"} bold={"plans"}/>
            <Footer />
        </div>
    )
}

export default Membership;