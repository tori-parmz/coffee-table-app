import './App.css';
import Player from './components/Player';

function App() {
  return (
    <div className='App'>
    <div className='container' id='app'>
      <div className='row'>
        <div className='col-5' id='player'>
          One
          <Player />

        </div>
        <div className='col' id='story'>
          Two

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
