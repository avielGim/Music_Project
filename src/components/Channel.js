import '../css/Channel.css'

import { useEffect, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


const Channel = (props) => {
    const [audio] = useState(new Audio(props.song));    
    const [mute, setMute] = useState(false);

    const { isPlay, isLoop, setPlay} = props;

    useEffect(() => {
        if(isPlay) {
            audio.play();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
        }
        isLoop? audio.loop = true : audio.loop = false;
    }, [isPlay, isLoop, audio]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlay(false));
        return () => {
          audio.removeEventListener('ended', () => setPlay(false));
        };
      }, []);

    const handleMute = () => {
        audio.muted = !mute;
        setMute(!mute);
    }

    return(
        <div>
            <div style={{float: 'left'}}><button className='btn' onClick={handleMute}>
                {mute? <FaVolumeMute />: <FaVolumeUp color='#8bc34a'/>}</button></div>
            <label className='bar'
                style={{ backgroundColor: props.backColor }}></label>
        </div>
    )
}

export default Channel;