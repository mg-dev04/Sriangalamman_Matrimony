import Header from '../components/Header'
import Footer from '../components/Footer'
import Border from '../components/Border'
import Heading from '../components/Heading'
import './About.css'

function FAQs(){
    return(
        <div>
            <Header />
            <Border />
            <Heading text={"FAQs"}/>
            <div className='container'>
                <h1>1.How can I register on sriangalammanmatrimony.com?</h1>
                <p>Registering in our matrimony site is a simple process, you can register by filling the online registration  that runs for 3 pages or use the Quick registration form, a shorter and simpler process available.</p>
                <h1>2.I did my registration, but my profile does not show up online ?</h1>
                <p>Every new profile will be validated by our ADMIN (Backend Team) and upon activation, your profile will be visible to all ! Verification of profiles is done manually. Our support team checks each and every profile carefully for any invalid or incorrect information and also candidates are contacted over the phone for confirmation of authority. You will get a notification once the profile is active !</p>
                <h1>3.Can I upload my photograph?</h1>
                <p>You have the option of uploading your photograph on My Profile Page. You can upload a maximum of ten photographs.</p>
                <h1>4.How do I upload Horoscope ?</h1>
                <p>We have an exclusive interface to key in your horoscope details. Login to your Matrimony account and click Manage Horoscope.</p>
                <h1>5.Can I edit all my details ?</h1>
                <p>At any time, you can update your profile by clicking Modify My Profile button .</p>
                <h1>6.I see a tab called MY MATCHES, What’s the use of it ?</h1>
                <p>My Matches fetches the profiles matching your partner preferences that you keyed in while registering your profile. Its dynamically updated.</p>
                <h1>7.Can I shortlist/bookmark a Profile ?</h1>
                <p>Yes, you can ! Its an useful feature to make a note of the interested profiles. You need to be logged in to use the shortlist feature.</p>
                <h1>8.How do I delete Shortlisted profiles?</h1>
                <p>Login using your matrimonial "User ID" and "Password". Click on the "Shortlisted Profiles". You could view and delete the Bookmarked members!</p>
                <h1>9.How do I change my password?</h1>
                <p>After logging into your account, click on the change password link. The system will ask for your old password and then the new one then login with your new password.</p>
                <h1>10.What are the benefits of a membership?</h1>
                <p id='space'>Most trusted Matrimonial service<br/>

                    100% verified Matrimonial profiles.<br/>

                    Managed by Complete Professionals<br/>

                    Dedicated Customer Care Service.<br/>

                    Post your personal profile !<br/>

                    Add more information about yourself and your family<br/>

                    Upload/add multiple photographs to your profile<br/>

                    Display your contact details to paid members<br/>

                    Express interest in other members<br/>

                    Why should I choose your paid membership package?<br/>

                    A paid membership have various packages and options to help you access advanced features of  sriangalammanmatrimony.com<br/>


                    Search suitable profile through matrimonial Website<br/>

                    Contact suitable matches via contact number, personalized messages, and customer service.<br/>

                    Send and receive personalized messages.<br/>

                    Customer care support.<br/>

                    Paid Matrimonial Members get top services.<br/>

                    Paid Matrimonial Members can express interest and write messages to other members of sriangalammanmatrimony.com

</p>
                <h1>11.How can I upgrade my paid membership ?</h1>
                <p>We provide various options for upgrading your membership. You can login to your matrimony account page and click upgrade button. Choose the right package for you, which will lead you to the payment page. You will be provided with various options for payment.</p>
                <h1>12.How do I contact customer care ?</h1>
                <p>sriangalammanmatrimony.com is eager to help you find your partner at the earliest. Customer Support is top priority to us. You can contact our customer care team in any of the following ways listed here.</p>
               
                
            </div>
            <Footer />
        </div>
    )
}

export default FAQs;