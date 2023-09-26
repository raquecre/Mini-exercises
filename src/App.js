
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BizzBuzz from './pages/BizzBuzz';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/BizzBuzz' element={<BizzBuzz/>} />
      <Route path='*' element={<ErrorPage/>} />



    </Routes>
    </div>
  )
}

export default App;
