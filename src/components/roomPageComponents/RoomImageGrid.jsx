import { Link } from "react-router-dom"
import { PiDotsNineLight } from 'react-icons/pi';

/* eslint-disable react/prop-types */
function RoomImageGrid({
    images,
    roomId
}) {
  return (
    <div className="hidden md:block my-6 relative" id="photos">
        {
            images.length > 0 &&
            <div className="grid grid-rows-2 grid-cols-4 gap-3 rounded-lg">
                <div className="col-start-1 row-start-1 col-span-2 row-span-2 cursor-pointer">
                    <img src={images[0]} className="object-cover w-full rounded-tl-xl rounded-bl-xl" />
                </div>
                
                <div className="col-start-3 row-start-1 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[1]} />
                </div>

                <div className="col-start-4 row-start-1 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[2]} className="rounded-tr-xl" />
                </div>

                <div className="col-start-3 row-start-2 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[3]} />
                </div>

                <div className="col-start-4 row-start-2 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[4]} className="rounded-br-xl" />
                </div>
            </div>
        }

        <div className="absolute bottom-4 right-4">
            <Link 
                to={`/rooms/${roomId}/gallery`} 
                className="px-4 py-2 border border-black rounded-lg flex justify-between items-center space-x-2 bg-gray-100"
            >
                <PiDotsNineLight className="text-lg" />
                <span>Show all photos</span>
            </Link>
        </div>
    </div>
  )
}

export default RoomImageGrid