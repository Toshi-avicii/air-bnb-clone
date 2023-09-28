/* eslint-disable react/prop-types */
import SearchBar from './SearchBar';
import AvatarBox from './AvatarBox';
import logo from '../../assets/logo-white.png';
// import ProfileDropdown from './ProfileDropDown';

function Navbar({ isSticky }) {
  return (
    <header 
      className={`hidden md:flex md:justify-between md:items-center px-4 py-5 md:border-b-2 md:border-gray-100 ${isSticky && `md:sticky md:top-0 md:z-10`} md:bg-white`}
    >
      <div className="logo-container flex-1">
        <img src={logo} alt="logo" width="120px" className='ml-4' />
      </div>
      <SearchBar />
      <AvatarBox />
      {/* <ProfileDropdown /> */}
    </header>
  )
}

export default Navbar