import React from 'react';
import Budd from "../assets/harold-budd-album.png"

const HaroldBudd = () => {
  return (
    <div>
        <button className='item-button'><img id='hb-album' className="image-padding" src={Budd} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></button>
    </div>
  )
}

export default HaroldBudd