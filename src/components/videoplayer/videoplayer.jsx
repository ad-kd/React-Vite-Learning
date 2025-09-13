import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/video.mp4'

const videoplayer = ({playState,setPlayState}) => {

  const player = useRef(null);

  const closePlayer =(e)=>{
    if(e.target === player.current){
        setPlayState(false);
    }
  }

  return (
    <div className={`videoplayer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoplay controls></video>
    </div>
  )
}

export default videoplayer