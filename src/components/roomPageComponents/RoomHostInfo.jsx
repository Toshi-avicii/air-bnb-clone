import HostProfileBox from '../host-details/HostProfileBox';
import HostFeatures from '../host-details/HostFeatures';
import { Link } from 'react-router-dom';

function RoomHostInfo({ host }) {
  return (
    <div className='bg-neutral-200 flex flex-col items-center rounded-lg p-6'>
        <div className='min-w-[55%] max-w-[55%]'>
            <HostProfileBox hostDetails={host} />
            <div className='my-4'>
                <HostFeatures hostDetails={host} />
            </div>
            <div>
                <p className='mb-3'>
                    I am a journalist and actor, and in May 2019 I created
                    the vegan brand BENECAO Brasil, with an artisanal factory,
                    store, restaurant and energizing spa. I live in the
                    same house, where I have three bedrooms for
                    hosting. Would you like to be in a vegan place with
                    natural products, tasty food, and an energy proposal?
                    Welcome.
                </p>
                <div className='flex flex-col space-y-4 items-start'>
                    <button className='my-4 underline font-semibold text-lg'>Show more</button>
                    {/* <button className='black-btn px-6'>Message Host</button> */}
                    <Link to={`/hosts/${host.id}`} className='black-btn px-6'>Message Host</Link>
                </div>

                <hr className='bg-gray-900 h-[3px] my-6' />

                <p className='text-sm'>
                    To protect your payment, never transfer money or communicate outside of Airbnb website or app.
                    This is just a clone, not the real airbnb website. 
                    This is done just for practice purpose of my development skills.
                </p>
            </div>
        </div>
    </div>
  )
}

export default RoomHostInfo