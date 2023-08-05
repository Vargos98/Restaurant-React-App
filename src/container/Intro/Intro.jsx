import {React, useState }from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  
  const VidRef= React.useRef();
  const [playVideo, setplayVideo] = useState(false);
  const handleVideo = () =>{
    setplayVideo((prevPlayVideo)=> !prevPlayVideo)
    if(playVideo){
      VidRef.current.pause();
    }else{
      VidRef.current.play();
    }
  }  
  
  return(
        <div className='app__vide0'>
          <video 
            src={meal}
            ref={VidRef}
            type='video/mp4'
            loop
            controls={false}
            muted
          />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overerlay_circle flex__center"

          onClick={handleVideo}
        
        
        >
            {playVideo ? (
              <BsPauseFill color='#fff' fontSize={30}/>
            ): <BsFillPlayFill  color='#fff' fontSize={30}/>}

        </div>
      </div>
        </div>
        
  )
}

export default Intro;
