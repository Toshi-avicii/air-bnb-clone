import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
