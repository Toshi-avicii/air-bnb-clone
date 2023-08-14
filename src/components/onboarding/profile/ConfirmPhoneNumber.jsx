import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ConfirmPhoneNumber({ formStep, setFormStep }) {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const form = useForm({
   defaultValues: {
    country: '',
    phoneNumber: '',
    checkLink: false
   }
  });

  const { register, formState, handleSubmit, getValues } = form;

  const { isSubmitting, errors } = formState

  const onSubmit = (data) => {
    console.log(data);
    setFormStep(8);
  }

  const onError = (errors) => {
    console.log(errors)
  }

  const handleChange = (element, index) => {
    if(isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

    // focus next input
    if(element.nextSibling && element.value !== '') {
        element.nextSibling.focus();
    }
  }

  const handleKey = (element, index) => {
    if(element.target.previousSibling) {
        if(element.keyCode === 8) {
            element.target.previousSibling.focus();
        }
    }

    if(index === 3) {
        if(element.keyCode === 8) {
            console.log('last element is pressed');
            element.target.value = '';
            element.target.previousSibling.focus();
        }
    }
  }

  return (
    <div>
        {
            (formStep === 6) &&
            <>
                <div className="my-4">
                    <p className="font-bold text-center text-sm uppercase mb-2">Step 1 of 2</p>
                    <h2 className="font-semibold text-center text-2xl mb-2">
                        Confirm your phone number
                    </h2>
                    <p className="text-lg text-center mb-2">
                        This is so your hosts, guests or Airbnb can reach you.
                    </p>
                </div>
                    
                <div>
                    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                        <hr className="my-4" />
                        <div className='flex items-center my-6 relative'>
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                {
                                    ...register('checkLink')
                                }
                            />
                            
                            <p className="text-sm text-semibold my-2 ml-4 font-semibold">
                                Text me a link to free Airbnb app
                            </p>
                        </div>
                        <button 
                            type='submit'
                            className={`px-4 py-3 my-8 bg-black text-white font-semibold rounded-lg w-full ${(errors.country || errors.phoneNumber) && "bg-slate-400" }`}
                            disabled={isSubmitting || errors.country || errors.phoneNumber}
                            onClick={() => setFormStep(7)}
                        >
                            Continue
                        </button>

                        <button 
                            type='submit'
                            className="text-lg mb-8 underline font-semibold w-full"
                            onClick={() => setFormStep(7)}
                        >
                            I&apos;ll do it later
                        </button>
                    </form>
                </div>
            </>
        }

        {
            (formStep === 7) &&
            <>
                <div className='my-4'>
                    <p className="font-bold text-center text-sm uppercase mb-2">Step 1 of 2</p>
                    <h2 className="font-semibold text-center text-2xl mb-2">
                        Confirm your phone number
                    </h2>
                    <p className="text-lg text-center mb-2">
                        Enter the 4-digit code Airbnb just sent to { getValues('phoneNumber') };
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className='flex flex-col justify-center items-center'>
                        <div className='border border-gray-400 rounded-lg'>
                            {
                                otp.map((data, index) => {
                                    return (
                                        <input 
                                            key={index}
                                            type="text" 
                                            maxLength={1}
                                            id='otp'
                                            className='w-[50px] h-[50px] py-2 px-4 mx-1 rounded font-bold text-center text-lg outline-none'
                                            placeholder='-'
                                            onChange={e => handleChange(e.target, index)}
                                            onFocus={e => e.target.select()}
                                            onKeyDown={(e) => handleKey(e, index)}
                                        />
                                    )
                                })
                            }

                        </div>
                        <button 
                            type='submit'
                            className={`px-4 py-3 my-6 bg-black text-white font-semibold rounded-lg w-[140px] ${(errors.country || errors.phoneNumber) && "bg-slate-400" }`}
                            disabled={isSubmitting || errors.country || errors.phoneNumber}
                        >
                            Continue
                        </button>
                    </form>

                    <div className='mb-4 flex items-center justify-center'>
                        <span>Didn&apos;t get a text?</span>
                        <button 
                            className="underline font-semibold ml-1"
                            onClick={() => setFormStep(7)}
                        >
                            Send again
                        </button>
                    </div>
                    <div className='mb-4'>
                        <button className="text-lg underline font-semibold w-full">
                            Call me instead
                        </button>
                    </div>
                    
                    <div className='mb-4'>
                        <button className="text-lg underline font-semibold w-full" onClick={() => setFormStep(8)}>
                            I&apos;ll do it later
                        </button>
                    </div>
                </div>
            </>
        }
    </div>
  )
}

export default ConfirmPhoneNumber