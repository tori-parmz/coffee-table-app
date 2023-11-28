import Kate from "../assets/kick-inside-album.png";
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const KateBush = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>The Kick Inside</i><br></br>
          Kate Bush<br></br>
          1978
        </Tooltip>
      );
  return (
    <div>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 300 }}
      overlay={renderTooltip}
    >
        <button className='item-button' onClick={handleShow}><img id="br-album" className="image-padding" src={Kate} alt='The Kick Inside, by Kate Bush' width="200px"></img></button>
        </OverlayTrigger>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>The Kick Inside</i><br></br>
          Kate Bush
            <h6>1978</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.discogs.com/master/28531-Kate-Bush-The-Kick-Inside" target="_blank" rel="noopener noreferrer"><img id="br-album" src={Kate} alt='The Kick Inside, by Kate Bush' width="200px"></img></a><br></br>
          <p className='off-canvas-text'><i>The Kick Inside</i>, being the debut album, is appropriately the first Kate Bush album I delved into. Listening to Kate Bush changed my life, full stop. I was definitely inspired by the orca sounds samoled in "Moving", the opening track, when deciding to mix in samples of the ocean waves and seaguls on the title track of the demo. I also was heavily inspired by "Moving" and "Wuthering Heights" when writing the song "Pound by Pound". Getting into Kate Bush in my mid-20s helped me feel fearless as an artist. Unafraid of being too much, too blunt, or too feeling.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
