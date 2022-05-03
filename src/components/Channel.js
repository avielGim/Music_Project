import '../css/Channel.css'

import { useEffect, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


const Channel = (props) => {
    const [audio] = useState(new Audio(props.song));    
    const [mute, setMute] = useState(false);

    const { isPlay, isLoop, setPlay} = props;

    // update the state of the audio. 
    useEffect(() => {
        // state play -> play the audio else -> pause and change the time to start
        if(isPlay) {
            audio.play();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
        }
        // state loop -> audio will repeat when it will finish
        isLoop? audio.loop = true : audio.loop = false;
    }, [isPlay, isLoop, audio]);

    // listen to the state of the audio. if end to play then change the state play to false
    useEffect(() => {
        audio.addEventListener('ended', () => setPlay(false));
        return () => {
          audio.removeEventListener('ended', () => setPlay(false));
        };
      }, [audio, setPlay]);

    // when the button mute pressed
    const handleMute = () => {
        audio.muted = !mute;
        setMute(!mute);
    }

    return(
        <div>
            <div style={{float: 'left'}}><button className='btn-mute' onClick={handleMute}>
                {/* mute state -> FaVolumeMute, volume state  -> FaVolumeUp */}
                {mute? <FaVolumeMute />: <FaVolumeUp color='#8bc34a'/>}</button>
            </div>
            <label className='bar-channel'
                style={{ backgroundColor: props.backColor }}>{props.nameAudio}</label>
        </div>
    )
}

export default Channel;