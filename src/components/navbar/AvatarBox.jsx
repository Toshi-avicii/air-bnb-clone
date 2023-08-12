import { useState } from 'react';
import { BsGlobe } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Avatar from '../../assets/react.svg';
import { Menu, Transition } from '@headlessui/react';
import OnBoardingDialog from '../onboarding/OnBoardingDialog';

function AvatarBox() {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (  
    <div className='flex flex-1 items-center justify-end relative'>
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
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="z-50"
        >
          <Menu.Items>
            <div className="absolute z-50 right-1 top-10 bg-white flex flex-col ring-gray-900/5 ring-1 rounded-md min-w-[225px] text-md leading-6">
              <div className="border-b-2 border-gray-200 p-4 flex flex-col justify-start items-start">
                <Menu.Item className="py-2">
                  {() => (
                    <button onClick={openModal}>
                      Sign Up
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item className="py-2">
                  {() => (
                    <button onClick={openModal}>
                      Login
                    </button>
                  )} 
                </Menu.Item>
              </div>
              <div className="border-b-2 border-gray-200 p-4">
                <Menu.Item className="py-2">
                  {() => (
                    <p>
                      Airbnb Your Home
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item className="py-2">
                  {() => (
                    <p>
                      Help
                    </p>
                  )} 
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <OnBoardingDialog isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
    </div>
  )
}

export default AvatarBox