import React from 'react'
import KensingtonGardens from "../assets/kensington-gardens-book.png"

const KensingtonBook = () => {
  return (
    <div>
        <button className='item-button'><img id='kensington-book' src={KensingtonGardens} alt='Pavillion of Dreams, by Harold Budd' width="180px"></img></button>

    </div>
  )
}

export default KensingtonBook