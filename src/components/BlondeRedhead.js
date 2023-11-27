import Blonde from "../assets/blonde-redhead-album.png";
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const BlondeRedhead = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>Melody of Certain Damaged Lemons</i><br></br>
          Blonde Redhead<br></br>
          2000
        </Tooltip>
      );
  return (
    <div>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 300 }}
      overlay={renderTooltip}
    >
        <button className='item-button' onClick={handleShow}><img id="br-album" className="image-padding" src={Blonde} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></button>
        </OverlayTrigger>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>Melody of Certain Damaged Lemons</i><br></br>
          Blonde Redhead
            <h6>2000</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.discogs.com/master/22457-Blonde-Redhead-Melody-Of-Certain-Damaged-Lemons"target="_blank" rel="noopener noreferrer"><img id="br-album" src={Blonde} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></a><br></br>
          <p className='off-canvas-text'>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
