import { Dialog } from '@headlessui/react';

function FormTitle({ formStep, isMobileView }) {
  return (
    <div>
      {
        ((formStep === 1 || formStep === 2) && !isMobileView) &&
        <Dialog.Title
          as="h1"
          className="text-2xl leading-6 text-gray-900 font-semibold mb-6 mt-4"
        >
          Welcome to Airbnb
        </Dialog.Title>
      }

      {
        ((formStep === 1 || formStep === 2) && isMobileView) &&
        <div className='flex justify-start items-center p-4'>
          <h3 className="text-2xl leading-6 text-gray-900 font-semibold my-6">
            Welcome to Airbnb
          </h3>
        </div>
      }
    </div>
  )
}

export default FormTitle