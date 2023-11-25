import React from 'react';
import Notepaper from "../assets/notepaper.jpeg"

const Note = () => {
  return (
    <div>
        <button className='item-button'><img id='note' src={Notepaper} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></button>

    </div>
  )
}

export default Note