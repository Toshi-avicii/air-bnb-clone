import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogoAirbnb } from 'react-icons/bi';
import { BsChatSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BottomBar() {
  const profilePic = useSelector((state) => state.appReducers.profile?.profilePic);
  const [pageDir, setPageDir] = useState('up');

  // detecting scroll direction
  let oldScrollY = window.scrollY;
    window.addEventListener('scroll', (e) => {
      if(oldScrollY < window.scrollY) {
        setPageDir('down');
      } else {
        setPageDir('up');
      }
      oldScrollY = window.scrollY;
    });


  return (
    <div 
      className={`p-4 border-t border-gray-400 bg-white z-[15] w-full flex justify-between items-center fixed ${pageDir === 'up' ? 'bottom-0' : '-bottom-[72px]'} left-0 md:hidden`}
      style={{
        transition: 'bottom 0.75s'
      }}
    >
        <Link to="/" className='flex flex-col items-center justify-center'>
            <AiOutlineSearch className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Explore</span>
        </Link>

        <Link to="/" className='flex flex-col items-center justify-center mx-6'>
            <AiOutlineHeart className='text-2xl text-gray-500' />
            <span className='text-gray-400 text-xs'>Wishlist</span>
        </Link>

        
        {
          profilePic &&
            <Link to="/" className='flex flex-col items-center justify-center mr-6'>
              <BiLogoAirbnb className='text-2xl text-gray-500 font-bold' />
              <span className='text-gray-400 text-xs'>Trips</span>
            </Link>
        }

        {
          profilePic && 
          <Link to="/" className='flex flex-col items-center justify-center mr-6'>
              <BsChatSquare className='text-2xl text-gray-500' />
              <span className='text-gray-400 text-xs'>Inbox</span>
          </Link>
        }

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