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
    setPercentage(5)
  }, []);
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setPercentage(percents => percents + 5)
    }, 1000);

    if (!isLoading) {
      clearInterval(interval);
    }

    if (percentage === 105) {
      clearInterval(interval);
      setPercentage(5);
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
