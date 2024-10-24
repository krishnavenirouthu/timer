// Import the useState hook from React for managing state
import { useState } from "react";

// Import the CSS file for styling
import "./App.css";

// Define the main App component
export default function App() {
  // Initialize state variables for timer, timeInterval, and button states
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isStartDisabled, setStartDisabled] = useState(false);
  const [isPauseDisabled, setPauseDisabled] = useState(true);
  const [isResetDisabled, setResetDisabled] = useState(true);

  // Function to start the timer
  const startTimer = () => {
    setTimeInterval(setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000));

    setStartDisabled(true); // Disable the start button
    setPauseDisabled(false); // Enable the pause button
    setResetDisabled(false); // Enable the reset button
  }

  // Function to pause the timer
  const pauseTimer = () => {
    clearInterval(timeInterval);

    setStartDisabled(false); // Enable the start button
    setPauseDisabled(true); // Disable the pause button
    setResetDisabled(false); // Enable the reset button
  }

  // Function to reset the timer
  const resetTimer = () => {
    setTimer(0);
    clearInterval(timeInterval);

    setStartDisabled(false); // Enable the start button
    setPauseDisabled(true); // Disable the pause button
    setResetDisabled(true); // Disable the reset button
  }

  // Render the timer and buttons in the component
  return (
    <div className="App">
      <h3>Timer: {timer}</h3>
      <div className="btn-wrapper">
        {/* Button to start the timer, disables itself when clicked */}
        <button onClick={startTimer} disabled={isStartDisabled}>Start</button>
        {/* Button to pause the timer, disables itself when clicked */}
        <button onClick={pauseTimer} disabled={isPauseDisabled}>Pause</button>
        {/* Button to reset the timer, disables itself when clicked */}
        <button onClick={resetTimer} disabled={isResetDisabled}>Reset</button>
      </div>
    </div>
  );
}