import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
