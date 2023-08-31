import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import RoomPage from './pages/RoomPage';
import Navbar from './components/navbar/Navbar';

function App() {
  const profile = useSelector((state) => state.appReducers.profile);
  
  useEffect(() => {
    console.log({
      country: profile.country,
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      phoneNumber: profile.phoneNumber,
      dob: new Date(profile.dob)
    });
  }, [profile])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rooms/:roomId' element={<RoomPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
