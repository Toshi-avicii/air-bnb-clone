import React from 'react'
import MapView from '../components/MapView'
import Navbar from '../components/navbar/Navbar'
import TabBar from '../components/menu-tab/TabBar'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function MapPage() {
  return (
    <>
      <Navbar />
      <TabBar />
      <div className="fixed bottom-8 left-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]">
        <Link to="/" className="px-6 py-4 bg-gray-900 flex justify-between items-center rounded-full hover:scale-[1.05] transition-all border border-black">
          <AiOutlineUnorderedList className="text-white text-lg" />
          <span className="inline-block mx-2 text-white text-lg font-semi-bold">Show List</span>
        </Link>
      </div>
      <MapView />

    </>
  )
}

export default MapPage