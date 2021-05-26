import { useState, useRef, useEffect } from "react";
import ProgressCircle from "./patterns/progress/ProgressCircle";
import './App.css';

export const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const interval = useRef(null);

  const start = () => {
    if (interval.current !== null) return;

    setLoading(true);
    interval.current = setInterval(() => {
      setPercentage(percents => percents + 1)
    }, 200);
  }

  const stop = () => {
    if (interval.current === null) return;
    setPercentage(percentage);
    setLoading(false);
    clearInterval(interval.current);
    interval.current = null;
  }

  useEffect(() => {
    if (percentage === 101) {
      setPercentage(0);
    }
  }, [percentage])

  return (
    <div className="app-container">
      <ProgressCircle percentage={percentage} loading={isLoading} />
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>End</button>
      </div>
    </div>
  )
}

export default App;
