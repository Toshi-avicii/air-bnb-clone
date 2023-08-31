import { AiFillStar } from 'react-icons/ai';

function RoomReservation({
    price,
    rating,
    noOfReviews
}) {
  return (
    <div className="ring-1 ring-slate-300 shadow-xl rounded-xl p-5 mt-4 min-w-[475px] max-w-[500px]">
        <div className='flex justify-between items-center'>
            <div>
                <h1 className="font-semibold text-2xl">${price}</h1>
                <p className='font-semibold mt-1'>Total before taxes</p>
            </div>
            <div className="flex space-x-2 items-center">
                <AiFillStar className='text-lg' />
                <span className='font-bold'>{rating}</span>
                <span className='text-zinc-500 font-semibold underline'>{noOfReviews} reviews</span>
            </div>
        </div>

        <div className='border-2 border-zinc-500 rounded-xl my-4'>
            <div className='flex'>
                <div className='flex flex-col items-start p-3 flex-1 border-r-2 border-zinc-500'>
                    <span className='uppercase text-sm font-bold'>Check-in</span>
                    <span className='font-semibold'>7/29/2023</span>
                </div>
                <div className='flex flex-col items-start p-3 flex-1'>
                    <span className='uppercase text-sm font-bold'>Check-out</span>
                    <span className='font-semibold'>8/04/2023</span>
                </div>
            </div>
            <div className='flex flex-col p-3 border-t-2 border-zinc-500'>
                <span className='uppercase text-sm font-bold'>guests</span>
                <select className='text-zinc-500 font-bold mt-1'>
                    <option value={1}>1 guest</option>
                    <option value={2}>2 guests</option>
                    <option value={3}>3 guests</option>
                    <option value={4}>4 guests</option>
                    <option value={5}>5 guests</option>
                    <option value="5+">5+ guests</option>
                </select>
            </div>
        </div>
        
        <div className='mt-2 mb-4'>
            <button className='pink-btn'>Reserve</button>
        </div>

        <p className='text-zinc-500 font-semibold text-lg text-center'>You won&apos;t be charged yet</p>
    </div>
  )
}

export default RoomReservation