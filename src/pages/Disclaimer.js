import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'

function Disclaimer(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"Disclaimer"} />
            <div className="container">
                <p>sriangalammanmatrimony.com is not responsible for any incorrect or inaccurate Content posted on the Site or in connection with the sriangalammanmatrimony.com Service, whether caused by users visiting the Site, Members or by any of the equipment or programming associated with or utilized in the Service, nor for the conduct of any user and/or Member of the sriangalammanmatrimony.com Service whether online or offline.sriangalammanmatrimony.com assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, user and/or Member communications. sriangalammanmatrimony.com is not responsible for any problems or technical malfunction of any telephone network or lines, computer on-line-systems, servers or providers, computer equipment, software, failure of email or players on account of technical problems or traffic congestion on the Internet or at any website or combination thereof, including injury or damage to users and/or Members or to any other person's keralaweds related to or resulting from participating or downloading materials in connection with the sriangalammanmatrimony.com Site and/or in connection with the sriangalammanmatrimony.com Service. </p>
                <p>Under no circumstances will sriangalammanmatrimony.com be responsible for any loss or damage to any person resulting from anyone's use of the Site or the Service and/or any Content posted on the sriangalammanmatrimony.com Site or transmitted to sriangalammanmatrimony.com Members.</p>
                <p>The exchange of profile(s) through or by sriangalammanmatrimony.com Should not in any way be construed as any offer and/or recommendation from/by sriangalammanmatrimony.com sriangalammanmatrimony.com Shall not be responsible for any loss or damage to any individual arising out of, or subsequent to, relations established pursuant to the use of sriangalammanmatrimony.com The Site and the Service are provided "AS-IS AVALIABLE BASIS" and sriangalammanmatrimony.com expressly disclaims any warranty of fitness for a particular purpose or non-infringement. sriangalammanmatrimony.com cannot guarantee and does not promise any specific results from use of the Site and/or the sriangalammanmatrimony.com Service. </p>
            </div>
            <Footer />
        </div>
    )
}

export default Disclaimer;