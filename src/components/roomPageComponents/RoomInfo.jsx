/* eslint-disable react/prop-types */
import { MdOutlineBed } from 'react-icons/md';
import { FaShower, FaBed } from 'react-icons/fa';
import { FaPeopleRoof } from 'react-icons/fa6';
import { GiParkBench } from 'react-icons/gi';
import { AiFillCalendar } from 'react-icons/ai';
import { BsTranslate } from 'react-icons/bs';

function RoomInfo({
    hostName,
    hostProfilePic,
    wifi,
    privateBath,
    beds
}) {
  return (
    <div className='hidden lg:block'>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Room in a home hosted by {hostName}</h1>
            <img src={hostProfilePic} className="w-[50px] h-[50px] rounded-full" />
        </div>
        <div className="flex justify-between items-center space-x-4">
            <div className="py-3 px-8 border-2 border-gray-300 rounded-lg flex space-x-3 items-center justify-start flex-1 min-h-[85px]">
                <MdOutlineBed className='text-2xl font-semibold' />
                <span className='font-bold'>
                    { beds === 1 ? '1 Single Bed' : `${beds} Beds` }
                </span>
            </div>

            <div className="px-8 py-3 border-2 border-gray-300 rounded-lg flex space-x-3 justify-start items-center flex-1 min-h-[85px]">
                <FaShower className='text-2xl font-semibold' />
                <span className='font-bold'>
                    { privateBath ? 'Dedicated Bathroom' : 'Shared Bathroom' }
                </span>
            </div>

            <div className="px-8 py-3 border-2 border-gray-300 rounded-lg flex space-x-3 justify-start items-center flex-1 min-h-[85px]">
                <FaPeopleRoof className='text-2xl font-semibold' />
                <span className='font-bold'>
                    Other guests may be here
                </span>
            </div>
        </div>
        
        <hr className="bg-gray-300 h-[2px] my-6" />

        <div>
            <div className="flex items-center space-x-3">
                <div>
                    <FaBed className='text-xl font-bold' />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Room in a home</h2>
                    <p className="text-zinc-500 text-sm font-semibold">
                        Your own room in a home, plus access to shared places.
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-3 my-6">
                <div>
                    <GiParkBench className='text-xl font-bold' />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Great for remote work</h2>
                    <p className="text-zinc-500 text-sm font-semibold">
                        Fast wifi at 236 Mbps, plus a dedicated workspace.
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <div>
                    <AiFillCalendar className='text-xl font-bold' />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Free Cancellation for 48 hours.</h2>
                </div>
            </div>
        </div>

        <hr className="bg-gray-300 h-[2px] my-6" />

        <div className='flex space-x-3 items-center'>
            <BsTranslate className='text-xl' />
            <p>
                <span className='text-zinc-500 font-medium'>Some info has been automatically translated. </span>
                <span className='underline font-bold'>Show original language</span>
            </p>
        </div>

        <hr className="bg-gray-300 h-[2px] my-6" />
    </div>
  )
}

export default RoomInfo