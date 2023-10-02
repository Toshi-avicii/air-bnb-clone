import { Dialog } from '@headlessui/react';
import { GrClose } from 'react-icons/gr';
import { BsChevronLeft } from 'react-icons/bs';

function FormHeader({ formStep, closeModal, backModal, isMobileView }) {
  return (
    <div>
        {
            (formStep <= 3) &&
            <div className="border-b-2 border-gray-200 p-6">
                <div className="relative">
                    {
                        (closeModal && backModal) ? 
                        <Dialog.Title
                            as="h3"
                            className="text-xl text-center leading-6 text-gray-900 font-bold"
                        >
                            {
                                formStep !== 3 ? "Log In or Signup" : "Finish Signing Up"
                            }
                        </Dialog.Title> : 
                        <div className='flex justify-center items-center'>
                            <h3 className="text-xl text-center leading-6 text-gray-900 font-bold">
                                {
                                    formStep !== 3 ? "Log In or Signup" : "Finish Signing Up"
                                }   
                            </h3>
                        </div>
                    }
                    {
                        !isMobileView && 
                        <div>
                            {
                                formStep !== 3 ?
                                <button className='absolute left-0 top-2' onClick={closeModal}>
                                    <GrClose />
                                </button> : 
                                <button className='absolute left-0 top-2' onClick={backModal}>
                                    <BsChevronLeft />
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default FormHeader