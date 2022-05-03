import '../css/Controls.css'

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoRepeat, IoReturnUpForwardOutline } from "react-icons/io5";


const Controls = (props) => {
    
    return(
        <div className='controler'>
            <button className='btn-button'
                    onClick={props.handleMusic}>
                        {/* // pause the audios state -> FaPauseCircle */}
                    {props.play? <FaPauseCircle size='3em' color='#ff5722'/>
                        : <FaPlayCircle size='3em' color='#8bc34a'/>}
            </button>
            <button className='btn-button'
                onClick={props.handleLoop}>
                    {/* loop state -> IoRepeat, else -> IoReturnUpForwardOutline*/}
                {props.loop? <IoRepeat size='2em' color='black'/>
                    : <IoReturnUpForwardOutline size='2em' color='black'/>}
            </button>

        </div>
    )
}

export default Controls;