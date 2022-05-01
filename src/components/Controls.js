import '../css/Controls.css'

const Controls = (props) => {
    return(
        <div className='controler'>
            <button className='play-btn'
                onClick={props.handlePlay}>play</button>
            <button className='stop-btn'
                onClick={props.handleStop}>stop</button>
            <button
                onClick={props.handleLoop}>loop toggle</button>
        </div>
    )
}

export default Controls;