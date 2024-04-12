
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import OurProgram from './components/OurProgram';

function App() {
  return (
      <>
      <Routes>
        <Route path='/'  element={<LandingPage/>} />
      </Routes>
   
      </>
  );
}

export default App;
