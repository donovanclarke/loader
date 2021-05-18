import { useState, useEffect } from "react";
import ProgressCircle from "./patterns/progress/ProgressCircle";
import './App.css';

export const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const handleLoading = (loading) => {
    setLoading(loading);
  }
  useEffect(() => {
    setPercentage(1)
  }, []);
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setPercentage(percents => percents + 1)
    }, 200);

    if (!isLoading) {
      clearInterval(interval);
    }

    if (percentage === 101) {
      clearInterval(interval);
      setPercentage(1);
    }

    return () => clearInterval(interval);
  }, [isLoading, percentage]);

  return (
    <div className="app-container">
      <ProgressCircle percentage={percentage} loading={isLoading} />
      <div>
        <button onClick={() => handleLoading(true)}>Start</button>
        <button onClick={() => handleLoading(false)}>End</button>
      </div>
    </div>
  )
}

export default App;
