import { useState } from "react";

import './Success.css'

import underline from '../Assets/underline.png'
import success from '../Assets/success.jpeg'



function Success(){
        const [readmore,setreadmore] = useState('Read more')

        function Read(){
        if(readmore === "Read more"){
            setreadmore("Read less")
        }
        else{
            setreadmore("Read more")
        }
    }

    return(
        <div className="success">
                <div className="p-text">
                    <h3 id="h3">Success<b style={{fontWeight:'600'}}> Stories</b> </h3>
                    <img alt="" className="underline" src={underline}/>
                </div>
                <div className='catalogue'>
                    
                    <img alt='' src={success}/>
                    <div className='date'><p>01-11-2023</p></div>
                    <div className='name'><p>NIVETHITHA & MANOJ KUMAR </p></div>
                    <p id="read" onClick={Read}>{readmore}</p>
                </div>
            </div>
    )
}

export default Success;