import { Dialog } from '@headlessui/react';
import { GrClose } from 'react-icons/gr';
import { BsChevronLeft } from 'react-icons/bs';

function CreateProfileView({ formStep, closeModal, backModal, isMobileView }) {
    return (
        <div>
            {
                (formStep === 5 && !isMobileView) &&
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

            {
                (formStep === 5 && isMobileView) &&
                <div className="border-b-2 border-gray-200 p-6">
                    <div className="relative">
                        <h3 className="text-xl text-center leading-6 text-gray-900 font-bold">
                            Create your profile
                        </h3>
                    </div>
                </div>
            }

            {
                (formStep > 5 && !isMobileView) &&
                <div className="border-b-2 border-gray-200 p-6">
                    <div className="relative">
                        <Dialog.Title
                            as="h3"
                            className="text-xl text-center leading-6 text-gray-900 font-bold"
                        >
                            Create your profile
                        </Dialog.Title>

                        <button className='absolute left-0 top-2' onClick={backModal}>
                            <BsChevronLeft />
                        </button>
                    </div>
                </div>
            }

            {
                (formStep > 5 && isMobileView) &&
                <div className="border-b-2 border-gray-200 p-6">
                    <div className="relative">
                        <h3 className="text-xl text-center leading-6 text-gray-900 font-bold">
                            Create your profile
                        </h3>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateProfileView