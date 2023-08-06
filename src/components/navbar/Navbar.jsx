import SearchBar from './SearchBar';
import AvatarBox from './AvatarBox';
import logo from '../../assets/logo-white.png';
// import ProfileDropdown from './ProfileDropDown';

function Navbar() {
  return (
    <header className='px-4 py-5 flex justify-between items-center border-b-2 border-gray-100 sticky top-0 z-10 bg-white'>
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