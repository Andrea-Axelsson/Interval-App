import React, { useRef, useEffect  } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import {setSelectedTimer, setOpenMenu} from '../features/timer/timerSlice'
import {motion} from 'framer-motion'

const Menu = () => {

  const dispatch: AppDispatch = useDispatch()
  const selectedTimer = useSelector((state: RootState) => state.timer.selectedTimer)
  const menuOpen = useSelector((state: RootState) => state.timer.menuOpen);
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedTimer(event.target.value))
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      dispatch(setOpenMenu()); // Stäng menyn om ett klick sker utanför
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
    <motion.section 
    className='menu'
    ref={menuRef} // Attach the ref to the menu
    initial={{top: '-100%'}}
    animate={{top: menuOpen ? '0%' : '-100%'}}
    transition={{type: 'tween', duration: 0.5, ease: 'easeInOut'}}
    >
    <form>
      <div className="custom-radio menu-text">
        <label>
          <input
            type="radio"
            value="analog"
            checked={selectedTimer === 'analog'}
            onChange={handleOptionChange}
          />
          Analog
        </label>
      </div>
      <div className="custom-radio menu-text">
        <label>
          <input
            type="radio"
            value="digital"
            checked={selectedTimer === 'digital'}
            onChange={handleOptionChange}
          />
          Digital
        </label>
      </div>
      <div className="custom-radio menu-text">
        <label>
          <input
            type="radio"
            value="text"
            checked={selectedTimer === 'text'}
            onChange={handleOptionChange}
          />
          Text
        </label>
      </div>
    </form>
    </motion.section>
    </>
  )
}

export default Menu