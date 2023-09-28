import DisplayBar from "../components/DisplayBar"
import Locations from "../components/Locations"
import TabBar from "../components/menu-tab/TabBar"
import { FaMap } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';
import { Link } from "react-router-dom";
import MobileNavbar from "../components/navbar/MobileNavbar";
import BottomBar from "../components/mobile/BottomBar";

function HomePage() {
  return (
    <div>
      <Navbar isSticky={true} />
      <MobileNavbar />
      <TabBar />
      <DisplayBar />
      <Locations />
      <div className="fixed bottom-16 left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
        <Link to="/map" className="px-4 py-3 md:px-6 md:py-4 bg-gray-900 flex justify-between items-center rounded-full hover:scale-[1.05] transition-all border border-black">
          <span className="inline-block mx-2 text-white text-sm md:text-lg font-semi-bold">Show Map</span>
          <FaMap className="text-white text-sm md:text-lg" />
        </Link>
      </div>
      <BottomBar />
    </div>    
  )
}

export default HomePage