import './App.css';
import Player from './components/Player';
import { Badge } from 'react-bootstrap';
import TapeRecorder from './components/TapeRecorder';
import HaroldBudd from './components/HaroldBudd';
import { BlondeRedhead } from './components/BlondeRedhead';
import HundredYearsBook from './components/HundredYearsBook';
import KensingtonBook from './components/KensingtonBook';
import CoffeeTable from './components/CoffeeTable';

function App() {
  return (
    <div className='App'>
    <div className='container-fluid' id='app'>
      <div className='row'>
        <div className='col-5' id='player'>
          <h3 className='title'>What's on my coffee table?</h3>
          <Player /> <br></br>
          <div className='tags'>
          <Badge pill bg="primary">
           experimental
            </Badge>
            <Badge pill bg="primary">
           worcester
            </Badge>
            <Badge pill bg="primary">
           acoustic
            </Badge>
            <Badge pill bg="primary">
           baroque
            </Badge>
            <Badge pill bg="primary">
           devotional
            </Badge>
            <Badge pill bg="primary">
           freak folk
            </Badge>
            <Badge pill bg="primary">
           psycho folk
            </Badge>
            <Badge pill bg="primary">
           samples
            </Badge>
            <Badge pill bg="primary">
           Worcester
            </Badge>
            </div>
            <br></br>
            <div className='container'>
          <p className='player-text'>In the spring of 2018, I recorded this demo with my friend Orin Robichaud who taught me how to use a 4-track tape recorder in the process. In our tinkering, they explained to me that since a 4-track plays all tracks of the tape simultaneously, regular tapes with music and other content will play some of the tracks backwards. This sparked a great interest in me in experimenting with sampling some self-help tapes, recording abstract sounds backward and forward, and the extremely fun process of bouncing and layering the tracks to build up a whole experience. This culminated in the track "Nouveau Riche" and the outro of "Mercury Man". In a fun way, I could never retrace my steps and figure out how some of those sounds we made came to be, which made the process very electric, collaborative, and joyful.</p>
          <p className='player-text'>The songs that were recorded for this demo were written between 2012 and 2015, each one a small turning point in my experimentations in songwriting. I have always found the recording process much less exciting than songwriting and performing, but having experimentation at the center of this process helped me to stay curious and focused. </p>
          </div>

        </div>
        <div className='col' id='story'>
          
          <CoffeeTable />
          </div>
          </div>
          </div>
          </div>
       
  );
}

export default App;
