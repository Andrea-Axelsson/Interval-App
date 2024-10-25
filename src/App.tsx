import Loading from "./pages/Loading"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SetTimer from "./pages/SetTimer";
import Timer from "./pages/Timer";
import AlarmBreak from "./pages/AlarmBreak";
import TimerManager from "./components/TimerManager";
import { useState } from 'react';

function App() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <Router>
    <TimerManager/> {/* TimerManager placeras här så att den körs oavsett vilken route som är aktiv */}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="set-timer" element={<SetTimer />} />
        <Route path="timer" element={<Timer />} />
        <Route path="break" element={<AlarmBreak />} />
      </Routes>
    </Router>
  </>
  )
}

export default App
