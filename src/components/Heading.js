import './Heading.css'

import underline from '../Assets/underline.png'


function Heading(props){

    const {text,bold} = props

    return(
        <div className="heading">
                    <p>{text} <b>{bold}</b> </p>
                    <img alt="" className="underline" src={underline}/>
        </div>
    )
}


export default Heading;
