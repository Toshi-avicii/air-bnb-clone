import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiFillFacebook, AiFillApple, AiOutlineMail, AiFillCloseCircle } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { GrClose } from 'react-icons/gr';
import { BsChevronLeft } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Logo from '../../assets/logo-w-name.png';

function DialogModal({ isOpen, closeModal }) {
    const [formStep, setFormStep] = useState(1);

    const form = useForm({
        defaultValues: {
            country: '',
            phoneNumber: '',
            email: '',
            firstName: '',
            lastName: '',
            dob: new Date(),
            password: ''
        }
    });

    const { register, handleSubmit, formState, getFieldState, getValues, control } = form;
    const { errors, isSubmitting, isSubmitSuccessful } = formState;

    const currentYear = new Date().getFullYear();

    const changeSteps = () => {
        if(
            !getFieldState('country').isTouched || 
            !getFieldState('phoneNumber').isTouched ||
            errors.phoneNumber
        ) {
            setFormStep(1);
            return;
        } else {
            setFormStep(2);
            console.log('it bypassed 2');
        }

        if(errors.email || !getFieldState('email').isTouched || getValues('email') === '') {
            setFormStep(2);
            console.log('it ran');
            return;
        } else {
            setFormStep(3)
        }

    }

    const backModal = () => {
        if(formStep === 3) {
            setFormStep(2);
        }
    }

    const submitHandler = (data) => {
        console.log('Form Submitted', data);
        
        if(isSubmitSuccessful) {
            setFormStep(4)
        }
    }

    const onError = (errors) => {
        console.log("Errors: ", errors);
    }

    useEffect(() => {
        if(!isOpen) {
            setFormStep(1);
        }
    }, [isOpen, setFormStep, formStep]);

    // useEffect(() => {
    //     if(isSubmitSuccessful) {
    //         reset();
    //     }
    // }, [isSubmitSuccessful, reset])
 
     return (
        <>
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
                                {
                                    (formStep <= 3) &&
                                    <div className="border-b-2 border-gray-200 p-6">
                                        <div className="relative">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-xl text-center leading-6 text-gray-900 font-bold"
                                            >
                                                {
                                                    formStep !== 3 ? "Log In or Signup" : "Finish Signing Up"
                                                }
                                            </Dialog.Title>
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
                                    </div>
                                }

                                {
                                    (formStep === 5) &&
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

                                <div className="px-8">
                                    {/* form title */}
                                    {
                                        (formStep === 1 || formStep === 2) &&
                                        <Dialog.Title
                                            as="h1"
                                            className="text-2xl leading-6 text-gray-900 font-semibold mb-6 mt-4"
                                        >
                                            Welcome to Airbnb
                                        </Dialog.Title>
                                    }
                                        
                                    <div>
                                        <form onSubmit={handleSubmit(submitHandler, onError)} noValidate>
                                            {/* 1st step */}
                                            {
                                                (formStep === 1) &&
                                                <div>
                                                    <div className="ring-1 ring-slate-400 rounded-lg">
                                                        <div className="border-b-2 border-gray-600">
                                                            <p className="px-3 pt-2 pb-0 text-sm text-gray-400 text-bold">Country/Region</p>
                                                            <select 
                                                                id="country"
                                                                className="px-2 pt-0 pb-2 font-semibold text-lg w-full"
                                                                {
                                                                    ...register('country', {
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Please select a country'
                                                                        },
                                                                    })
                                                                }
                                                            >
                                                                <option value="united states of america">United States of America</option>
                                                                <option value="india">India</option>
                                                                <option value="france">France</option>
                                                                <option value="spain">Spain</option>
                                                                <option value="canada">Canada</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <input 
                                                                type='text'
                                                                placeholder="Phone Number" 
                                                                className="p-3 w-full" 
                                                                id="phoneNumber"
                                                                {
                                                                    ...register('phoneNumber', {
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Please Enter your phone number'
                                                                        },
                                                                        maxLength: {
                                                                            value: 10,
                                                                            message: "Phone must be of 10 characters only"
                                                                        },
                                                                        minLength: {
                                                                            value: 10,
                                                                            message: "Phone must be of 10 characters only"
                                                                        },
                                                                        pattern: {
                                                                            value: /^[0-9]+$/,
                                                                            message: 'Enter a valid phone number'
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="text-sm py-2 text-semibold my-2">
                                                        We &apos; ll call or text you to confirm your number. Standard message and
                                                        data rate apply. <span className="underline">Privacy Policy</span>
                                                    </p>
                                                </div>
                                            }

                                            {/* 2nd step */}
                                            {
                                                (formStep === 2) &&
                                                <div className={`rounded-lg ${errors.email?.message ? "ring-2 ring-red-400" : "ring-slate-400 ring-1"}`}> 
                                                    <div>
                                                        <input 
                                                            type='email'
                                                            id="email"
                                                            placeholder="Email Id" 
                                                            className={`p-3 w-full ${errors.email?.message && "bg-red-50"}`} 
                                                            {
                                                                ...register('email', {
                                                                    required: {
                                                                        value: true,
                                                                        message: 'Please Enter your Email id'
                                                                    },
                                                                    pattern: {
                                                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                                        message: "Enter a Valid Email"
                                                                    },
                                                                    validate: {
                                                                        notValidLength: (fieldValue) => {
                                                                            if(fieldValue.length === 0) {
                                                                                return 'Email must not be empty'
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            }

                                            {/* 3rd step */}

                                            {
                                                (formStep === 3) &&
                                                <div className="mt-6">
                                                    <div className="border border-gray-400 rounded-lg">
                                                        <div className="border-b-2 border-gray-600">
                                                            <input 
                                                                type='text' 
                                                                placeholder="First Name" 
                                                                className="p-3 w-full" 
                                                                {
                                                                    ...register('firstName', {
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Please Enter your First Name'
                                                                        },
                                                                        validate: {
                                                                            notValidLength: (fieldValue) => {
                                                                                if(fieldValue.length === 0) {
                                                                                    return 'First name must not be empty'
                                                                                }
                                                                            },
                                                                            leastLength: (fieldValue) => {
                                                                                if(fieldValue.length < 6) {
                                                                                    return 'First name must not be of at least 6 characters'
                                                                                }
                                                                            }
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div>
                                                            <input 
                                                                type='text' 
                                                                placeholder="Last Name" 
                                                                className="p-3 w-full" 
                                                                {
                                                                    ...register('lastName', {
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Please Enter your Last Name'
                                                                        },
                                                                        validate: {
                                                                            notValidLength: (fieldValue) => {
                                                                                if(fieldValue.length === 0) {
                                                                                    return 'Last name must not be empty'
                                                                                }
                                                                            }
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        Make sure it matches your government id
                                                    </p>
                                                    <div className="border border-gray-400 rounded-lg">
                                                        <input 
                                                            type='date'
                                                            placeholder="Birthdate" 
                                                            className="p-3 w-full" 
                                                            {...register('dob', {
                                                                valueAsDate: true,
                                                                required: 'D.O.B is required',
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        To sign up you must be at least 18. Your birthday
                                                        won &apos; t be shared with other people who uses Airbnb.
                                                    </p>

                                                    <div className="border border-gray-400 rounded-lg">    
                                                        <input 
                                                            type='email' 
                                                            id="email"
                                                            placeholder="Email Id" 
                                                            className="p-3 w-full" 
                                                            {
                                                                ...register("email", {
                                                                    required: {
                                                                        value: true,
                                                                        message: 'Email must not be empty'
                                                                    }
                                                                    
                                                                })
                                                            }
                                                        />
                                                    </div>

                                                    <p className="py-2 text-sm text-gray-400 text-bold mb-4">
                                                        We will email you trip confirmations and receipts
                                                    </p>

                                                    <div className="border border-gray-400 rounded-lg">    
                                                        <input 
                                                            type='password' 
                                                            placeholder="Password" 
                                                            className="p-3 w-full" 
                                                            {
                                                                ...register('password', {
                                                                    required: {
                                                                        value: true,
                                                                        message: 'Please Enter your password'
                                                                    },
                                                                    minLength: {
                                                                        value: 8,
                                                                        message: 'Password must be at least 8 characters long'
                                                                    },
                                                                    validate: {
                                                                        notValidLength: (fieldValue) => {
                                                                            if(fieldValue.length < 8) {
                                                                                return 'Password must not be at least 8 characters long'
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        />
                                                    </div>

                                                </div>
                                            }

                                            {/* 4th step */}

                                            {
                                                (formStep === 4) &&
                                                <div className="py-4">
                                                    <div className="my-4">
                                                        <img src={Logo} width={50} height={50} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold leading-1 mb-2">Our Community Commitment</h4>
                                                        <h1 className="font-bold leading-1 mb-2 text-2xl">Airbnb is a community where everyone can belong</h1>
                                                        <p className="leading-1 mb-4">To ensure this, we are asking you to commit to the following:</p>
                                                        <p className="leading-1 mb-4">
                                                            I agree to treat everyone in the Airbnb community - regardless of their 
                                                            race, religion, national origin, ethnicity, skin color, disablity,
                                                            sex, gender identity, sexual orientation or age - with respect, and 
                                                            without judgement or bias.
                                                        </p>
                                                        <p className="underline font-bold mb-4">Learn More &gt; </p>
                                                    </div>
                                                    <div>
                                                        <button 
                                                            type="submit"
                                                            className="px-4 py-3 my-2 bg-pink-600 text-white font-semibold rounded-lg w-full"
                                                            onClick={() => setFormStep(5)}
                                                        >
                                                            Agree and Continue
                                                        </button>

                                                        <button 
                                                            className="px-4 py-3 my-2 bg-white font-semibold rounded-lg w-full border border-black"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                </div>
                                            }

                                            {/* 5th step */}

                                            {
                                                (formStep === 5) &&
                                                <div className="py-4">
                                                    <div className="my-4 flex justify-center items-center">
                                                        <img src={Logo} width={50} height={50} />
                                                    </div>
                                                    <div>
                                                        <h1 className="text-2xl text-center mb-2 font-semibold">Welcome to Airbnb</h1>
                                                        <p className="text-center mb-2 text-lg">
                                                            Discover places to stay and unique experiences around the world.
                                                        </p>
                                                        <button 
                                                            type="submit"
                                                            className="px-4 py-3 my-2 bg-black text-white font-semibold rounded-lg w-full"
                                                            onClick={() => closeModal()}
                                                        >
                                                            Continue
                                                        </button>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                (errors.firstName && formStep === 3) &&
                                                <p className="flex items-center my-2">
                                                    <AiFillCloseCircle className="text-red-600 mr-1" />
                                                    <span className="text-sm text-red-400 font-bold">{errors.firstName?.message}</span>
                                                </p> 
                                            }

                                            {
                                                (errors.lastName && formStep === 3) &&
                                                <p className="flex items-center mb-2">
                                                    <AiFillCloseCircle className="text-red-600 mr-1" />
                                                    <span className="text-sm text-red-400 font-bold">{errors.lastName?.message}</span>
                                                </p> 
                                            }

                                            {
                                               (formStep === 3 && (currentYear - new Date(getValues('dob')).getFullYear() < 18)) &&
                                               <p className="flex items-center mb-2">
                                                    <AiFillCloseCircle className="text-red-600 mr-1" />
                                                    <span className="text-sm text-red-400 font-bold">Minimum age must be 18</span>
                                                </p> 
                                            }

                                            {
                                                (errors.email && formStep === 3) &&
                                                <p className="flex items-center mb-2">
                                                    <AiFillCloseCircle className="text-red-600 mr-1" />
                                                    <span className="text-sm text-red-400 font-bold">{errors.email?.message}</span>
                                                </p> 
                                            }

                                            {
                                                (errors.password && formStep === 3) &&
                                                <p className="flex items-center mb-2">
                                                    <AiFillCloseCircle className="text-red-600 mr-1" />
                                                    <span className="text-sm text-red-400 font-bold">{errors.password?.message}</span>
                                                </p> 
                                            }

                                            {
                                                (formStep === 1 || formStep === 2) &&
                                                <button 
                                                    className="px-4 py-3 my-8 bg-pink-600 text-white font-semibold rounded-lg w-full"
                                                    onClick={changeSteps}
                                                >
                                                    Continue
                                                </button>
                                            }


                                            {
                                                (formStep === 3) &&
                                                <button 
                                                    type="submit"
                                                    className={`px-4 py-3 my-8 bg-pink-600 text-white font-semibold rounded-lg w-full ${(errors.email || errors.firstName || errors.lastName || errors.password || errors.dob) && "bg-slate-400" }`}
                                                    disabled={isSubmitting || errors.email || errors.firstName || errors.lastName || errors.password || errors.dob}
                                                >
                                                    Agree and Continue
                                                </button>
                                            }

                                        </form>
                                    </div>

                                    {
                                        (formStep === 1 || formStep === 2) &&
                                        <div className="flex items-center">
                                            <hr className="w-full" />
                                            <span className="inline-block mx-6">or</span>
                                            <hr className="w-full" />
                                        </div>
                                    }



                                    {/* other signup options */}
                                    {
                                        (formStep === 1 || formStep === 2) &&
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
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        <DevTool control={control} />
        </>
    )
}

export default DialogModal