import { useState, useEffect } from 'react';
import './DigitalClock.scss';

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="digital-clock">
      <h5>Hora actual</h5>
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
