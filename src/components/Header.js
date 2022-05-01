import '../App.css';
import Poem from './Poem';
import { useState } from 'react';
import Controls from '../components/Controls';

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
  // mute is in Poem component
    const[play, setPlay] = useState(false)
    const[loop, setLoop] = useState(false)

//   const allPoems = {
//       song1: 'blue', song2: 'blue',song3: 'blue',song4: 'blue',song5: 'blue',song6: 'blue',song7: 'blue',song8: 'blue',song9: 'blue'}
  
    const handlePlay = () => {
        setPlay(true)
    }

    const handleStop = () => {
        setPlay(false)
    }

    const handleLoop = () => {
        setLoop(!loop)
    }

  return (
    <div className="App">
        <h1>cursor</h1>
        {/* {allPoems.map((value) => 
            <Poem song={value} isPlay={play} isLoop={loop} backColor={'blue'}/>)} */}
        <Poem song={song1}
            isPlay={play}
            isLoop={loop}
            backColor={'blue'}/>
        <Poem song={song2}
            isPlay={play}
            isLoop={loop}
            backColor={'green'}/>
        <Poem song={song3}
            isPlay={play}
            isLoop={loop}
            backColor={'yellow'}/>
        <Poem song={song4}
            isPlay={play}
            isLoop={loop}
            backColor={'purple'}/>
        <Poem song={song5}
            isPlay={play}
            isLoop={loop}
            backColor={'black'}/>
        <Poem song={song6}
            isPlay={play}
            isLoop={loop}
            backColor={'red'}/>
        <Poem song={song7}
            isPlay={play}
            isLoop={loop}
            backColor={'orange'}/>
        <Poem song={song8}
            isPlay={play}
            isLoop={loop}
            backColor={'brown'}/>
        <Poem song={song9}
            isPlay={play}
            isLoop={loop}
            backColor={'gray'}/>
        <br />
        <br />
        <Controls 
            play={play}
            handlePlay={handlePlay}
            handleStop={handleStop}
            handleLoop={handleLoop}/>
    </div>
  );
}

export default Header;
