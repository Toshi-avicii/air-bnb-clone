import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import RoomPage from './pages/RoomPage';
import RoomGalleryPage from './pages/RoomGalleryPage';
import HostProfilePage from './pages/HostProfilePage';
import MapPage from './pages/MapPage';

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
          <Route path='/rooms/:roomId' element={<RoomPage />} />
          <Route path='/rooms/:roomId/gallery' element={<RoomGalleryPage />} />
          <Route path='/hosts/:hostId' element={<HostProfilePage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
