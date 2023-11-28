import React from 'react';
import tapeplayer from '../assets/tape-player.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FirstSon from '../assets/first-son.mp3'


const TapeRecorder = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>Home Recording</i><br></br>
          "First Son"<br></br>
          2014
        </Tooltip>
      );
      
  return (
    <>
        <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 300 }}
    overlay={renderTooltip}
  >
    <button className='item-button' onClick={handleShow}><img id='tape' className="image-padding" src={tapeplayer} alt="tape player" width="250 px"></img></button>
    </OverlayTrigger>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>Home Recording</i><br></br>
          "First Son"<br></br>
          <h6>2014</h6>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href={FirstSon} target="_blank" rel="noopener noreferrer"><img id='tape' className="image-padding" src={tapeplayer} alt="tape player" width="250 px"></img></a>
        <audio src={FirstSon} controls></audio>
        <p className='off-canvas-text'>This is one of the earliest recordings of the song "First Sun", which early on was titled "First Son". I went back and forth on the title, but settled on the sun, because this song always felt bright to me. It's so interesting to hear the subtle differences in how it was played just after writing it vs. how I'm used to playing it now. I thought I played it the same way all these years!</p>
        <p>Something I love is the joy I can hear in my voice in this early recording. It's reminding me of how much joy this song gave me in writing it.</p>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TapeRecorder