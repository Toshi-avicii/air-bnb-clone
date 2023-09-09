import DisplayBar from "../components/DisplayBar"
import Locations from "../components/Locations"
import TabBar from "../components/menu-tab/TabBar"
import { FaMap } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar isSticky={true} />
      <TabBar />
      <DisplayBar />
      <Locations />
      <div className="fixed bottom-8 left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
        <button className="px-6 py-4 bg-gray-900 flex justify-between items-center rounded-full hover:scale-[1.05] transition-all border border-black">
          <span className="inline-block mx-2 text-white text-lg font-semi-bold">Show Map</span>
          <FaMap className="text-white text-lg" />
        </button>
      </div>
    </div>    
  )
}

export default HomePage