import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './Pages/SignUp';
import Profile from './Pages/Profile';
import LoginForm from './Pages/Login';
import Home from './Pages/Home';
import Registrations from './Pages/Registrations';
import About from './Pages/About';
import "./Pages/Style.css";
import ScrollToSection from './components/ScrollToSection';
// import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
  return <h1>This is the Home Page</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <ScrollToSection/>
      <Navbar/>
      {/* <div className='mainbg mt-32'>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router> 
    </>
  )
}

export default App
