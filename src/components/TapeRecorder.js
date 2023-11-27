import React from 'react';
import tapeplayer from '../assets/tape-player.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const TapeRecorder = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>Voice Memo Recording</i><br></br>
          "Song Title"<br></br>
          2015
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
          <Offcanvas.Title>Voice Memo Recording</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TapeRecorder