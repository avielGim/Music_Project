import '../css/Cursor.css'


const Cursor = (props) => {

    return(
        <div className='work'>
            {/* play state -> move the cursor from right to left, else stay staty */}
            {props.play? 
                <div className='inWork'>
                    <div className='inInWork'></div>
                </div> 
                : <div className='inInWork'></div>}
        </div>    
    )
}

export default Cursor;