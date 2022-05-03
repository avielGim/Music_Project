import '../css/Cursor.css'


const Cursor = (props) => {

    return(
        <div className='cursor'>
            {/* play state -> move the cursor from right to left, else stay staty */}
            {props.play? 
                <div className='loop-line'>
                    <div className='bar-line'></div>
                </div> 
                : <div className='bar-line'></div>}
        </div>    
    )
}

export default Cursor;