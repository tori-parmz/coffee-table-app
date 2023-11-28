import React from 'react';
import Lyrics from "../assets/first-sun-lyrics.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Note = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>"First Sun" lyrics</i><br></br>
          2013
        </Tooltip>
      );
  return (
    <>
    <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 300 }}
    overlay={renderTooltip}
  >
        <button className='item-button' onClick={handleShow}><img id='note' src={Lyrics} alt='First Sun song lyrics on notepaper' width="200px"></img></button>
       </OverlayTrigger>
       <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>"First Sun"<br></br>
          <h6>Written 2013</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>I'm givin' up but<br></br>
you can see it in my eyes<br></br>
that I was the first son,<br></br>
the first sun to rise<br></br>
it ain't enough, no<br></br>
it ain't enough to apologize<br></br>
I was the first sun, the worst sun in your eyes<br></br>
</p>
<p>
I could feel it in your blood<br></br>
oh, your smoke<br></br>
so unkind.<br></br>
now you're runnin' like a bull<br></br>
down the alleys in my mind<br></br>
and I'm lacin' up my shoes<br></br>
tryin' to lose you somewhere behind<br></br>
I was the first,<br></br>
I was the worst sun your eyes<br></br>
</p>
<p className='subtext'>"First Sun" was written in the winter of 2013 as a kind of defiant marching song to motivate me to keep pressing onward.</p>
        </Offcanvas.Body>
      </Offcanvas>
       </>
  )
}

export default Note