import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './Pages/SignUp';
import Profile from './Pages/Profile';
import LoginForm from './Pages/Login';
import Home from './Pages/Home';
import Registrations from './Pages/Registrations';

function HomePage() {
  return <h1>This is the Home Page</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registrations" element={<Registrations />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
