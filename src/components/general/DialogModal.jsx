import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiFillFacebook, AiFillApple, AiOutlineMail } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { GrClose } from 'react-icons/gr';

function DialogModal({ isOpen, setIsOpen, closeModal }) {
    const [formSteps, setFormSteps] = useState({
        firstStep: true,
        secondStep: false,
        thirdStep: false
    });

    const [formStep, setFormStep] = useState(1);

    
    const changeSteps = () => {
        if(formStep > 0 && formStep < 3) {
            setFormStep((prev) => prev + 1);
        }
        setFormSteps({
            firstStep: false,
            secondStep: true,
            thirdStep: false
        })
    }

    useEffect(() => {
        if(!isOpen) {
            setFormStep(1);
            setFormSteps({
                firstStep: true,
                secondStep: false,
                thirdStep: false
            })
        }
        if(formStep === 1) {
            setFormSteps({
                firstStep: true,
                secondStep: false,
                thirdStep: false
            })
        } else if(formStep === 2) {
            setFormSteps({
                firstStep: false,
                secondStep: true,
                thirdStep: false
            })
        } else {
            setFormSteps({
                firstStep: false,
                secondStep: false,
                thirdStep: true
            })
        }
    }, [isOpen, setFormSteps, formStep]);
 
     return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-30" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all min-w-[550px]">
                                <div className="border-b-2 border-gray-200 p-6">
                                    <div className="relative">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl text-center leading-6 text-gray-900 font-bold"
                                        >
                                            Log In or Sign Up
                                        </Dialog.Title>
                                        <button className='absolute left-0 top-2' onClick={closeModal}>
                                            <GrClose />
                                        </button>
                                    </div>
                                </div>

                                <div className="px-8">
                                    {/* form title */}

                                    <Dialog.Title
                                        as="h1"
                                        className="text-2xl leading-6 text-gray-900 font-semibold mb-6 mt-4"
                                    >
                                        Welcome to Airbnb
                                    </Dialog.Title>
                                        
                                    <div>
                                        <form>
                                            {/* 1st step */}
                                            {
                                                (formSteps.firstStep && (!formSteps.secondStep) && (!formSteps.thirdStep)) &&
                                                <div>
                                                    <div className="ring-1 ring-slate-400 rounded-lg">
                                                        <div className="border-b-2 border-gray-600">
                                                            <p className="px-3 pt-2 pb-0 text-sm text-gray-400 text-bold">Country/Region</p>
                                                            <select className="px-2 pt-0 pb-2 font-semibold text-lg w-full">
                                                                <option>United States of America</option>
                                                                <option>India</option>
                                                                <option>France</option>
                                                                <option>Spain</option>
                                                                <option>Canada</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <input type='tel' placeholder="Phone Number" className="p-3 w-full" />
                                                        </div>
                                                    </div>
                                                    <p className="text-sm py-2 text-semibold my-2">
                                                        We'll call or text you to confirm your number. Standard message and
                                                        data rate apply. <span className="underline">Privacy Policy</span>
                                                    </p>
                                                </div>
                                            }

                                            {/* 2nd step */}
                                            {
                                                (!formSteps.firstStep && formSteps.secondStep && !formSteps.thirdStep) &&
                                                <div className="ring-1 ring-slate-400 rounded-lg">    
                                                    <div>
                                                        <input type='email' placeholder="Email Id" className="p-3 w-full" />
                                                    </div>
                                                </div>
                                            }

                                            {/* 3rd step */}

                                            {
                                                (!formSteps.firstStep && !formSteps.secondStep && formSteps.thirdStep) &&
                                                <div>
                                                    <div className="border border-gray-400 rounded-lg">
                                                        <div className="border-b-2 border-gray-600">
                                                            <input type='text' placeholder="First Name" className="p-3 w-full" />
                                                        </div>
                                                        <div>
                                                            <input type='text' placeholder="Last Name" className="p-3 w-full" />
                                                        </div>
                                                    </div>
                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        Make sure it matches your government id
                                                    </p>
                                                    <div className="border border-gray-400 rounded-lg">
                                                         <input type='date' placeholder="Birthdate" className="p-3 w-full" />
                                                    </div>
                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        To sign up you must be at least 18. Your birthday
                                                        won't be shared with other people who uses Airbnb.
                                                    </p>

                                                    <div className="border border-gray-400 rounded-lg">    
                                                        <input type='email' placeholder="Email Id" className="p-3 w-full" />
                                                    </div>

                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        We will email you trip confirmations and receipts
                                                    </p>

                                                    <div className="border border-gray-400 rounded-lg">    
                                                    
                                                        <input type='password' placeholder="Password" className="p-3 w-full" />
                                                    
                                                    </div>

                                                </div>
                                            }

                                            <button 
                                                type="button" 
                                                className="px-4 py-3 my-4 bg-pink-600 text-white font-semibold rounded-lg w-full"
                                                onClick={changeSteps}
                                            >
                                                {
                                                    formStep === 3 ? "Agree and Continue" : "Continue"
                                                }
                                            </button>

                                        </form>
                                    </div>

                                    <div className="flex items-center">
                                        <hr className="w-full" />
                                        <span className="inline-block mx-6">or</span>
                                        <hr className="w-full" />
                                    </div>


                                    {/* other signup options */}
                                    <div className="my-4">
                                        <button className='my-4 flex p-3 items-center border-2 w-full border-black rounded-lg'>
                                            <AiFillFacebook className="self-start" style={{
                                                color: 'dodgerblue',
                                                fontSize: '24px'
                                            }} />
                                            <span className="font-semibold block w-full self-center text-black">Continue with Facebook</span>
                                        </button>

                                        <button className='my-4 flex p-3 items-center border-2 w-full border-black rounded-lg'>
                                            <FcGoogle className="self-start" style={{
                                                fontSize: '24px'
                                            }} />
                                            <span className="font-semibold block w-full self-center text-black">Continue with Google</span>
                                        </button>

                                        <button className='my-4 flex p-3 items-center border-2 w-full border-black rounded-lg'>
                                            <AiFillApple className="self-start" style={{
                                                fontSize: '24px'
                                            }} />
                                            <span className="font-semibold block w-full self-center text-black">Continue with Apple</span>
                                        </button>

                                        <button className='my-4 flex p-3 items-center border-2 w-full border-black rounded-lg'>
                                            <AiOutlineMail className="self-start" style={{
                                                fontSize: '24px'
                                            }} />
                                            <span className="font-semibold block w-full self-center text-black">Continue with Email</span>
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default DialogModal