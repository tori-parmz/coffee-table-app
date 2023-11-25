import React from 'react'
import tapeplayer from '../assets/tape-player.png'


const TapeRecorder = () => {
  return (
    <div>
    <button className='item-button'><img id='tape' className="image-padding" src={tapeplayer} alt="tape player" width="250 px"></img></button>
    </div>
  )
}

export default TapeRecorder