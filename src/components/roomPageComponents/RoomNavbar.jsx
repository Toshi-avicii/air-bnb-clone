/* eslint-disable react/prop-types */
import { AiFillStar } from 'react-icons/ai';

function RoomNavbar({ isBoxVisible, price, rating, reviews = [] }) {
  let reserveContent;

  if(isBoxVisible) {
      reserveContent = <div className='hidden lg:block'>
        <div className="lg:flex lg:space-x-3 lg:items-center">
            <div>
                <h1 className="font-semibold text-lg">${price}</h1>
                <p className='font-semibold text-sm'>Total before taxes</p>
                <div className="flex space-x-2 items-center">
                    <AiFillStar />
                    <span className='font-bold text-sm'>{rating}</span>
                    <span className='text-zinc-500 font-semibold underline text-sm'>{reviews ? reviews?.length : null} reviews</span>
                </div>
            </div>
            <div>
                <button className='pink-btn px-12 py-3'>Reserve</button>
            </div>
            </div>
        </div>
  }

  return (
    <div className={`hidden sticky top-0 left-0 z-10 w-full px-4 ${!isBoxVisible ? 'py-[38px]' : 'py-4' } border-b border-b-zinc-400 bg-white lg:flex lg:justify-center lg:items-center`}>
        <div className="w-[90%] flex justify-between items-center">
          <nav>
            <ul className="flex items-center justify-start space-x-6">
              <li>
                <a href="#photos" className="font-semibold">Photos</a>
              </li>
              <li>
                <a href="#amenities" className="font-semibold">Amenities</a>
              </li>
              <li>
                <a href="#reviews" className="font-semibold">Reviews</a>
              </li>
              <li>
                <a href="#location" className="font-semibold">Location</a>
              </li>
            </ul>
          </nav>
          { reserveContent }
        </div>
      </div>
  )
}

export default RoomNavbar