
import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className='mzx-w-4xl mx-auto px-20 '>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>




      </Routes>
    </div>
  );
}

export default App;
