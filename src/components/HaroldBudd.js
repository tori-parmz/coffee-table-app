import React from 'react';
import Budd from "../assets/harold-budd-album.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HaroldBudd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>The Pavillion of Dreams</i><br></br>
          Harold Budd<br></br>
          1978
        </Tooltip>
      );
  return (
    <div>
        <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 300 }}
      overlay={renderTooltip}
    >
        <button className='item-button' onClick={handleShow}><img id='hb-album' className="image-padding" src={Budd} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></button>
        </OverlayTrigger>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><i>The Pavillion of Dreams</i><br></br>
            Harold Budd
            <h6>1978</h6>
          
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.discogs.com/master/32827-Harold-Budd-The-Pavilion-Of-Dreams"target="_blank" rel="noopener noreferrer"><img id='hb-album' src={Budd} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></a><br></br>
          <p className='off-canvas-text'>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default HaroldBudd