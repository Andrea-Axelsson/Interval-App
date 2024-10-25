import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { resetTimer, startTimer, tick } from '../features/timer/timerSlice';
import { useNavigate } from 'react-router-dom';

const TimerManager: React.FC = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: RootState) => state.timer.isRunning);
  const currentSeconds = useSelector((state: RootState) => state.timer.currentSeconds);
  const selectedOption = useSelector((state: RootState) => state.timer.selectedOption);
  const navigate = useNavigate(); // För att navigera

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(tick());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (!isRunning && currentSeconds === 0) {
      if (selectedOption === "5-min-break-intervals" || !selectedOption) {
        navigate('/break'); // Navigera till "break" om 5-min-break-intervals är vald
      } else if (selectedOption === "intervals") {
        dispatch(resetTimer()); // Starta om timern
        dispatch(startTimer())
      }
    }
  }, [isRunning, currentSeconds, selectedOption, navigate, dispatch]);

  return null; // Den här komponenten visar inget, den kör bara timer-logiken
};

export default TimerManager;