import { useState, useEffect } from "react";

function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes < 60) return `${minutes}m ${remainingSeconds}s`;

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
}

export default function useTimer(startTime) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const elapsed = currentTime - Math.floor(startTime / 1000);
      setElapsedTime(elapsed);
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, [startTime]);

  return formatTime(elapsedTime);
}
