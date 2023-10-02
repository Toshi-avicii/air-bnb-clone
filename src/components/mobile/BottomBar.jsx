import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function BottomBar() {
  const profilePic = useSelector((state) => state.appReducers.profile?.profilePic);

  return (
    <div className="p-4 border-t border-gray-400 bg-white z-[15] w-full flex justify-center items-center fixed bottom-0 left-0 md:hidden">
        <Link to="/" className='flex flex-col items-center justify-center'>
            <AiOutlineSearch className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Explore</span>
        </Link>

        <Link to="/" className='flex flex-col items-center justify-center mx-6'>
            <AiOutlineHeart className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Wishlist</span>
        </Link>

        {
          !profilePic ?
          <Link to="/login" className='flex flex-col items-center justify-center'>
              <FaRegUserCircle className='text-2xl text-gray-500' />
              <span className='text-gray-400 text-xs'>Login</span>
          </Link> : 
          <Link to="/profile" className='flex flex-col items-center justify-center'>
            <FaRegUserCircle className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Profile</span>
          </Link>
        }

    </div>
  )
}

export default BottomBar