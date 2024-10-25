import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  time: number;
  selectedOption: string;
  selectedTimer: string;
  totalSeconds: number; 
  currentSeconds: number; 
  isRunning: boolean;
  menuOpen: boolean;
}

const initialState: TimerState = {
  time: 1, // 1 minuter som exempel
  selectedOption: '',
  selectedTimer: 'analog',
  totalSeconds: 1 * 60,
  currentSeconds: 1 * 60, 
  isRunning: false,
  menuOpen: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setOpenMenu: (state) => {
      state.menuOpen = !state.menuOpen
      console.log("menu toggled")
    },
    addTime: (state) => {
      state.time += 1;
      state.totalSeconds = state.time * 60;
      console.log("time", state.time);
    },
    minusTime: (state) => {
      if (state.time > 0) {
        state.time -= 1;
        state.totalSeconds = state.time * 60;
      }
      console.log("time", state.time);
    },
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
      console.log("Selected option", state.selectedOption);
    },
    
      setSelectedTimer: (state, action: PayloadAction<string>) => {
        state.selectedTimer = action.payload;
        console.log("Selected timer", state.selectedTimer);
      },
 
    startTimer: (state) => {
      state.isRunning = true;
      state.currentSeconds = state.time * 60; // Initiera currentSeconds baserat på time när timern startar
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    tick: (state) => {
      if (state.currentSeconds > 0) {
        state.currentSeconds -= 1;
      } else {
        state.isRunning = false; // Stoppa timern
      }
    },
    resetTimer: (state) => {
      state.currentSeconds = state.time * 60; // Återställ currentSeconds till time * 60
      state.isRunning = false;
    },
  },
});

export const { addTime, minusTime, setSelectedOption, setSelectedTimer, startTimer, stopTimer, tick, resetTimer, setOpenMenu} = timerSlice.actions;
export default timerSlice.reducer;