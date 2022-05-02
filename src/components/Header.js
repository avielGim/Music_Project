import '../css/Header.css'

import Cursor from './Cursor';
import Channel from './Channel';
import Controls from './Controls';

import { useState } from 'react';

import song1 from '../Playlist/_tambourine_shake_higher.mp3'
import song2 from '../Playlist/ALL TRACK.mp3'
import song3 from '../Playlist/B VOC.mp3'
import song4 from '../Playlist/DRUMS.mp3'
import song5 from '../Playlist/HE HE VOC.mp3'
import song6 from '../Playlist/HIGH VOC.mp3'
import song7 from '../Playlist/JIBRISH.mp3'
import song8 from '../Playlist/LEAD 1.mp3'
import song9 from '../Playlist/UUHO VOC.mp3'


const Header = (props) => {
    // mute is in Channel component
    const[play, setPlay] = useState(false);
    const[loop, setLoop] = useState(false);

    const channelsColor = ['#f44336', '#e91e63', '#9c27b0', 
                           '#673ab7', '#3f51b5', '#2196f3', 
                           '#03a9f4', '#00bcd4', '#009688'];
    
    const channelsFile = [song1, song2, song3, 
                          song4, song5, song6, 
                          song7, song8, song9];

    const handleMusic = () => {
        setPlay(!play);
    }

    const handleLoop = () => {
        setLoop(!loop);
    }

    return (
        <div className='main'>

            <div className='content'>
                <Cursor play={play}/>
            </div>

            {channelsFile.map((value, index) => 
                <div key={index}><Channel song={value}
                    isPlay={play}
                    isLoop={loop}
                    backColor={channelsColor[index]}
                    setPlay={setPlay}/>
                    <br />
                </div>)}

            <div>
                <Controls 
                    play={play}
                    loop={loop}
                    handleMusic={handleMusic}
                    handleLoop={handleLoop}/>
            </div>

        </div>
    );
}

export default Header;


//   ['#f44336', '#e91e63', '#9c27b0', 
//    '#673ab7', '#3f51b5', '#2196f3', 
//    '#03a9f4', '#00bcd4', '#009688']

//    '#4caf50', '#8bc34a', '#cddc39', 
//    '#ffeb3b', '#ffc107', '#ff9800', 
//    '#ff5722', '#795548', '#607d8b']