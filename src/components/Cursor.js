import '../css/Cursor.css'


const Cursor = (props) => {

    return(
        <div className='work'>
            {props.play? 
                <div className='inWork'>
                    <div className='inInWork'></div>
                </div> 
                : <div className='inInWork'></div>}
        </div>    
    )
}

export default Cursor;