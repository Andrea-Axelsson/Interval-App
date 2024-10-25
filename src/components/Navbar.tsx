import React from 'react'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setOpenMenu} from '../features/timer/timerSlice';
import Hamburger from './Hamburger';

const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <nav className='nav'>
            <div className='nav__logo' onClick={() => dispatch(setOpenMenu())}>
            <Hamburger/>
            </div>
        <p className='nav__title'>interval</p>
    </nav>
  )
}

export default Navbar