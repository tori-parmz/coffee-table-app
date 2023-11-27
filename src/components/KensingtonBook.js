import React from 'react'
import KensingtonGardens from "../assets/kensington-gardens-book.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const KensingtonBook = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>Kensington Gardens</i><br></br>
          Rodrigo Fresán<br></br>
          2003
        </Tooltip>
      );
  return (
    <div>
    <OverlayTrigger
    placement="left"
    delay={{ show: 250, hide: 300 }}
    overlay={renderTooltip}
  >
        <button className='item-button' onClick={handleShow}><img id='kensington-book' src={KensingtonGardens} alt='Pavillion of Dreams, by Harold Budd' width="180px"></img></button>
    </OverlayTrigger>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>Kensington Gardens</i><br></br>
          Rodrigo Fresán<br></br>
          <h6>2003</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.goodreads.com/book/show/41812831-the-hundred-years-war-on-palestine" target="_blank" rel="noopener noreferrer"><img id='hb-album' src={KensingtonGardens} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></a><br></br>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default KensingtonBook