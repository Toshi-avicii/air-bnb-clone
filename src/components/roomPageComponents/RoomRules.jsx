import { BsChevronRight } from 'react-icons/bs';

function RoomRules() {
  return (
    <div>
        <h1 className="text-2xl mb-4 font-bold">Things to know</h1>

        <div className="flex justify-between items-center flex-wrap">
            <div className="flex-1">
                <h2 className="text-lg font-semibold">House Rules</h2>
                <p className="my-2">Check-in: 8:00 AM - 11:00 PM</p>
                <p className="mb-2">Checkout before: 12:00 PM</p>
                <p>2 guests maximum</p>
                <div className="flex space-x-2 items-center">
                    <button className="underline my-4 font-semibold text-lg">Show more</button>
                    <BsChevronRight className='text-lg font-bold' />
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold">Safety & Property</h2>
                <p className="my-2">No carbon monoxide alarm</p>
                <p className="mb-2">No smoke alarm</p>
                <p>Security camera/recording device</p>
                <div className="flex space-x-2 items-center">
                    <button className="underline my-4 font-semibold text-lg">Show more</button>
                    <BsChevronRight className='text-lg font-bold' />
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold">Cancelation Policy</h2>
                <p className="my-2">Free cancelation for 48 hours</p>
                <p>
                    Review the host&apos;s full cancellation policy which
                    applies even if you cancel for illness or disruptions
                    caused by COVID-19.
                </p>
                <div className="flex space-x-2 items-center">
                    <button className="underline my-4 font-semibold text-lg">Show more</button>
                    <BsChevronRight className='text-lg font-bold' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomRules