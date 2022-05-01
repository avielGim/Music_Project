import { useEffect, useState } from 'react';
import '../css/Poem.css'

const Poem = (props) => {
    const [audio] = useState(new Audio(props.song));    
    const [mute, setMute] = useState(false)

    const { isPlay, isLoop } = props

    useEffect(() => {
        isPlay? audio.play() : audio.pause()
        isLoop? audio.loop = true : audio.loop = false
    }, [isPlay, isLoop, audio]);

    const handleMute = () => {
        audio.muted = !mute;
        setMute(!mute)
    }

    return(
        <div>
            <label className='bar'
                style={{ backgroundColor: props.backColor }}>  </label>
            <button onClick={handleMute}> mute toggle </button>
        </div>
    )
}

export default Poem;