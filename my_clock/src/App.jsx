import './App.scss'
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  

  return (
    <>
     
     <div className="background">
      <div className="clock-container">
        <DigitalClock />
      </div>
      <div className="clock-container">
        <Countdown />
      </div>
      <div className="stopwatch">
        <Stopwatch />
      </div>
    </div>

    </>
  )
}

export default App
