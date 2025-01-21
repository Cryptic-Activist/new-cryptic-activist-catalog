'use client';

import { useState, useEffect } from 'react';

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const startCountDown = (initialTimeInMiliseconds: number) => {
    setTimeLeft(initialTimeInMiliseconds);
  };

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const remainingMilliseconds = milliseconds % 1000;

    return `${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}.${remainingMilliseconds}`;
  };

  return {
    timeLeftInMiliseconds: timeLeft,
    timeLeftFormatted: formatTime(timeLeft),
    startCountDown,
  };
};

export default useCountdown;
