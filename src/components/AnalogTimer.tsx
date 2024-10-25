import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store'; // Se till att du pekar på rätt fil där din RootState finns

function AnalogTimer() {
  const totalSeconds = useSelector((state: RootState) => state.timer.totalSeconds); // Totalt antal sekunder från start
  const currentSeconds = useSelector((state: RootState) => state.timer.currentSeconds); // Nuvarande sekunder som räknar ner

  useEffect(() => {
    const container = document.querySelector('.timer__analog-container');

    for (let i = 0; i < 60; i++) {
      const tick = document.createElement('div');
      tick.classList.add('tick');
      container?.appendChild(tick);

      const angle = i * 6;
      tick.style.transform = `rotate(${angle}deg) translateY(-160px)`;
    }
  }, []);

  // Beräkna hur många sekunder och minuter som har gått
  const elapsedSeconds = totalSeconds - currentSeconds;
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);


  return (
    <>
    <article className="timer__analog">
      <div className="timer__analog-container"></div>

      {/* Sekundvisare */}
      <div
        className="second-hand"
        style={{
          transform: `rotate(${elapsedSeconds * 6}deg)`, // Roterar kontinuerligt baserat på hur många sekunder som gått
        }}
      ></div>

      {/* Minutvisare */}
      <div
        className="minute-hand"
        style={{
          transform: `rotate(${(elapsedMinutes % 60) * 6}deg)`, // Roterar baserat på minuter
        }}
      ></div>
    </article>
  </>
  );
}

export default AnalogTimer;