import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Timer from 'easytimer.js';
import { RootState } from '../app/store';


const DigitalTimer: React.FC = () => {
  const currentSeconds = useSelector((state: RootState) => state.timer.currentSeconds);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1 className='h1'>{formatTime(currentSeconds)}</h1> {/* Visar nedräkning i format mm:ss */}
    </div>
  );
};

export default DigitalTimer;



















/* import React from 'react'

const DigitalTimer = () => {
  return (
    <h1 className='h1'>7:32</h1>
  )
}

export default DigitalTimer */