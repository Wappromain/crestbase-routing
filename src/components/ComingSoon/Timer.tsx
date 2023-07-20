import React, { useState, useEffect } from "react";
import { Timer, TimerDesign, TimerDesignText } from "./ComingSoon.styled";

interface CountdownProps {
  targetDate: Date;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate and set initial time remaining immediately after the component mounts
    setTimeRemaining(calculateTimeRemaining());

    // Update time remaining every second
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function calculateTimeRemaining() {
    const totalSeconds = Math.max(
      0,
      Math.floor((targetDate.getTime() - Date.now()) / 1000)
    );
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }

  return (
    <Timer>
      <TimerDesign>
        <h3>{timeRemaining.days}</h3>
        <TimerDesignText>Days</TimerDesignText>
      </TimerDesign>
      <h4>:</h4>
      <TimerDesign>
        <h3>{timeRemaining.hours}</h3>
        <TimerDesignText>Hours</TimerDesignText>
      </TimerDesign>
      <h4>:</h4>
      <TimerDesign>
        <h3>{timeRemaining.minutes}</h3>
        <TimerDesignText>Minutes</TimerDesignText>
      </TimerDesign>
      <h4>:</h4>
      <TimerDesign>
        <h3>{timeRemaining.seconds}</h3>
        <TimerDesignText>Seconds</TimerDesignText>
      </TimerDesign>
    </Timer>
  );
};

export default Countdown;
