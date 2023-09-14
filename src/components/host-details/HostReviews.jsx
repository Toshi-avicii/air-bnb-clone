import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function HostReviews({ hostDetails, slidesOnView }) {
    return (
        <div>
            <div>
                <h2 className="font-semibold text-2xl leading-5">{hostDetails.name}&apos;s reviews</h2>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={slidesOnView ? 2 : 1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                className='reviews-slider px-0 w-full overflow-x-hidden'
            >
                {
                    hostDetails.reviews ? hostDetails.reviews.map((review) => {
                        return (
                            <SwiperSlide key={review.id} className="mt-6">
                                <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[150px] flex flex-col justify-between">
                                    <p className="mb-4 font-semibold text-black text-lg">&quot;{review.comment}&quot;</p>
                                    <div>
                                        <h2 className="text-2xl font-bold">{review.from}</h2>
                                        <p className="text-sm text-gray-400">{review.date}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }) : []
                }
            </Swiper>
            <div className="mb-6">
                <button
                    className="px-4 py-3 border-2 border-black text-lg w-full font-bold rounded-lg"
                >
                    Show all {hostDetails.reviews && hostDetails.reviews.length} reviews
                </button>
            </div>
        </div>
    )
}

export default HostReviews