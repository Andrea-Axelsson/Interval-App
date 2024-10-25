import React, { useEffect, useState } from 'react';
import Button from '../components/Button'
import { resetTimer, startTimer, tick } from '../features/timer/timerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AlarmBreak = () => {

  const selectedOption = useSelector((state: RootState) => state.timer.selectedOption);
  const [timeLeft, setTimeLeft] = useState(1 * 60); // 5 minuter i sekunder
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedOption === "5-min-break-intervals" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      navigate('/timer');
    }
  }, [timeLeft, navigate, selectedOption]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className='break__container'>
      {selectedOption === "5-min-break-intervals" &&
 
      <div className='break-content'>
         <motion.i 
      className="fa-solid fa-pause"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.2, 1], // Pulserande rörelse
      }}
      transition={{
        duration: 1.5,  // Hur lång tid varje puls tar
        ease: "easeInOut",
        repeat: Infinity,  // Upprepa animationen oändligt
        repeatDelay: 0.5,  // Paus mellan pulseringar
      }}
      style={{ display: 'inline-block' }}  // För att kunna skala korrekt
    />
        <h2 className='h2 dark'>Pause and breathe</h2>
        <p className='p'>{formatTime(timeLeft)}</p>
      </div>
      }
      
      {/* TIMES UP */}


      {!selectedOption &&
      <div className='break-content'>
      <motion.i 
      className="fa-regular fa-bell"
      initial={{ rotate: 0 }}
      animate={{
        rotate: [0, -20, 20, -15, 15, -10, 10, 0], // Pendlande rörelse
      }}
      transition={{
        duration: 1.5,  // Hur lång tid animationen tar
        ease: "easeInOut",
        repeat: Infinity,  // Repetera animationen
        repeatDelay: 1,    // Paus mellan upprepningar
      }}
      style={{ display: 'inline-block' }}  // För att kunna rotera korrekt
    />
      <h2 className='h2 dark'>Times up!</h2>
    </div>
      }

        <div className='break-btn'>

      
        {!selectedOption &&
        <Link to="/set-timer">
          <Button variant="dark">
            SET NEW TIMER
          </Button>
          </Link>
        }

        {selectedOption === "5-min-break-intervals" &&
        <Link to="/timer">
          <Button variant="dark">
            NO PAUSE, GO NOW!
          </Button>
          </Link>
        }
        </div>
    </section>
  )
}

export default AlarmBreak