import { useEffect } from 'react';
import AnalogTimer from '../components/AnalogTimer'
import Button from '../components/Button'
import DigitalTimer from '../components/DigitalTimer'
import TextTimer from '../components/TextTimer'
import { startTimer, resetTimer} from '../features/timer/timerSlice'; // Importera startTimer och resetTimer
import{Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import Menu from '../components/Menu';


const Timer = () => {

  const dispatch = useDispatch();
  const selectedTimer = useSelector((state: RootState) => state.timer.selectedTimer)

  // Startar timern när komponenten mountas
  useEffect(() => {
    dispatch(startTimer());

    return () => {
      dispatch(resetTimer()); // Rensar timern när komponenten avmonteras
    };
  }, [dispatch]);

  return (
    <>
    <Menu/>
    <section className='container'>
      
        <Navbar/>
        {selectedTimer === "analog" && <AnalogTimer/>}
        {selectedTimer === "digital" && <DigitalTimer/>}
        {selectedTimer === "text" && <TextTimer/>}
      <Link to="/set-timer">
        <Button variant='light'>
          ABORT TIMER
        </Button>  
      </Link>  
      
    </section>
    </>
    

  )
}

export default Timer