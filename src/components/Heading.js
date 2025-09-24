import './Heading.css'

import underline from '../Assets/underline.png'


function Heading(props){

    const {text,bold,color} = props

    return(
        <div className="heading">
                    <p style={{color: color? 'white': '#c30332'}}>{text} <b>{bold}</b> </p>
                    <img alt="" className="underline" src={underline}/>
        </div>
    )
}


export default Heading;
