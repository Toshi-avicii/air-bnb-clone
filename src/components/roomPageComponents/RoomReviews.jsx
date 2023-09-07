import { AiFillStar } from 'react-icons/ai';
import ReviewBar from '../general/ReviewBar';

/* eslint-disable react/prop-types */
function RoomReviews({ roomReviews = [] }) {
  console.log(roomReviews);

  const months = [
    'January',
    'February',
    "March",
    'April',
    'May',
    "June",
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  
  function totalReview(parameter) {
    
    if(parameter === 'all') {
        const sum = roomReviews && roomReviews.reduce((accumulator, currentValue) => {
            return accumulator + ((currentValue.accuracy + currentValue.checkIn + currentValue.cleanliness + currentValue.communication + currentValue.location + currentValue.value) / 6);
        }, 0);

        return sum;
    }

    if(parameter !== 'all') {
        const sum = roomReviews && roomReviews.reduce((accumulator, currentValue) => {
            return accumulator + currentValue[parameter];
        }, 0);
        return sum;
    }
  }

  let reviewSum = totalReview('all');

  return (
    <div>
        <div className="my-6">
            <h1 className='flex space-x-2 items-center font-bold text-xl'>
                <AiFillStar />
                <span className='text-2xl'>{roomReviews && parseFloat((reviewSum / roomReviews.length).toFixed(2))}</span>
                <span className='w-[5px] h-[5px] bg-black rounded-full'></span>
                <span className='text-2xl'>
                    {roomReviews && roomReviews.length} reviews
                </span>
            </h1>
        </div>
        
        <div className='grid grid-cols-2 grid-rows-3 gap-3'>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Cleanliness</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('cleanliness') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('cleanliness') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Accuracy</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('accuracy') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('accuracy') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Communication</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('communication') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('communication') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Location</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('location') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('location') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Check-in</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('checkIn') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('checkIn') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-lg font-normal'>Value</p>
                <div className="flex space-x-4 items-center">
                    <ReviewBar totalLength={5} coveredLength={totalReview('value') / roomReviews.length} />
                    <p className='text-lg font-normal'>{(totalReview('value') / roomReviews.length).toFixed(2)}</p>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 grid-rows-3 gap-3 my-6'>
            {
                roomReviews.slice(0, 6).map((review, index) => {
                    return (
                        <div key={index}>
                            <div className='flex space-x-3 items-center'>
                                <div>
                                    <img src={review.profilePic} alt="reviewer" className='w-[75px] h-[75px] rounded-full' />
                                </div>
                                <div>
                                    <p className='text-xl font-medium'>{review.from}</p>
                                    <p className='text-zinc-500'>{months[review.date.getMonth()]} {review.date.getFullYear()}</p>
                                </div>
                            </div>
                            <div className="my-4">
                                <p className="font-medium text-lg w-[85%]">{review.comment}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='flex justify-start mb-6'>
            <button className='black-outline-btn w-auto px-10 py-3'>Show all reviews</button>
        </div>
    </div>
  )
}

export default RoomReviews