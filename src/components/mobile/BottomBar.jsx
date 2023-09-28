import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

function BottomBar() {
  return (
    <div className="p-4 border-t border-gray-400 bg-white z-[15] w-full flex justify-center items-center fixed bottom-0 left-0 md:hidden">
        <div className='flex flex-col items-center justify-center'>
            <AiOutlineSearch className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Explore</span>
        </div>

        <div className='flex flex-col items-center justify-center mx-6'>
            <AiOutlineHeart className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Wishlist</span>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <FaRegUserCircle className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Login</span>
        </div>
    </div>
  )
}

export default BottomBar