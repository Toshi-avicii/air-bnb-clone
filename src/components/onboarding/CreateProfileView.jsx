import { Dialog } from '@headlessui/react';
import { GrClose } from 'react-icons/gr';

function CreateProfileView({ formStep, closeModal }) {
  return (
    <div>
        {
            (formStep >= 5) &&
            <div className="border-b-2 border-gray-200 p-6">
                <div className="relative">
                    <Dialog.Title
                        as="h3"
                        className="text-xl text-center leading-6 text-gray-900 font-bold"
                    >
                        Create your profile
                    </Dialog.Title>
            
                    <button className='absolute left-0 top-2' onClick={closeModal}>
                        <GrClose />
                    </button> 
                </div>
            </div>
        }
    </div>
  )
}

export default CreateProfileView