import { Dialog } from '@headlessui/react';

function FormTitle({ formStep }) {
  return (
    <div>
        {
            (formStep === 1 || formStep === 2) &&
            <Dialog.Title
                as="h1"
                className="text-2xl leading-6 text-gray-900 font-semibold mb-6 mt-4"
            >
                Welcome to Airbnb
            </Dialog.Title>
        }
    </div>
  )
}

export default FormTitle