import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './home';
import Game from './Game';
import Error from './error';
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='game' element={<Game />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}
 
export default App;