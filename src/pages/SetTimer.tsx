import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import {addTime, minusTime, setSelectedOption} from '../features/timer/timerSlice'
import {useNavigate} from 'react-router-dom'
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";


const SetTimer:React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const time = useSelector((state: RootState) => state.timer.time)
    const selectedOption = useSelector((state: RootState) => state.timer.selectedOption)


    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSelectedOption(event.target.value)) ;
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("selectedOption", selectedOption);
        navigate('/timer')
      };

  return (

    <>
    <Menu/>
    <section className='container'>
      
        <Navbar/>
    
        <article className='setTimer__timer'>
            <article className="timer">
                <i onClick={() => time > 1 && dispatch(minusTime())} className="fa-solid fa-chevron-left"></i>
                <h1 className='h1'>{time}</h1>
                <i onClick={() => dispatch(addTime())} className="fa-solid fa-chevron-right"></i>
            </article>
            <p className=''>minutes</p>
            
        </article>
        <form onSubmit={handleSubmit}>
      <div className="custom-radio">
        <label>
          <input
            type="radio"
            value="intervals"
            checked={selectedOption === "intervals"}
            onChange={handleOptionChange}
          />
          <span className="checkmark"></span>
          Intervals
        </label>
      </div>
      <div className="custom-radio">
        <label>
          <input
            type="radio"
            value="5-min-break-intervals"
            checked={selectedOption === "5-min-break-intervals"}
            onChange={handleOptionChange}
          />
          <span className="checkmark"></span>
          5 min break/ interval
        </label>
      </div>
      <button className="submit-btn" type="submit">START TIMER</button>
    </form>
        
    </section>
    </>    
    

    
  )
}

export default SetTimer