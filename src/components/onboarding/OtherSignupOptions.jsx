import { AiFillFacebook, AiFillApple, AiOutlineMail } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

function OtherSignupOptions({ formStep }) {
  return (
    <>
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
    </>
  )
}

export default OtherSignupOptions