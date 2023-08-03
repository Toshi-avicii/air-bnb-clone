
import { BsGlobe } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Avatar from '../../assets/react.svg';
import { Menu } from '@headlessui/react';

function AvatarBox() {
  
  return (
    
    <div className='flex flex-1 items-center justify-end'>
      <div className="lang-box flex px-4 items-center">
        <p className='px-6 font-semibold'>Airbnb your home</p>
        <BsGlobe />
      </div>
      <Menu>
        <div className="menu border-2 border-gray-200 rounded-full px-2 flex py-1">
          <Menu.Button className="mr-2">
            <FaBars />
          </Menu.Button>
          
              <div className="avatar bg-black w-[25px] h-[25px] rounded-full">  
                <img 
                  src={Avatar}
                  alt="avatar-icon" 
                  className="w-[25px] h-[25px]"
                />
              </div>
        </div>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )} 
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
      </Menu.Items>
      </Menu>
    </div>
  )
}

export default AvatarBox