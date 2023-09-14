import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { AiFillStar } from 'react-icons/ai';

function HostListings({ name, listings, imageHeight, imageWidth }) {
    return (
        <>
            <div>
                <h2 className="font-semibold text-2xl my-4">{name && name}&apos;s listings</h2>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                className='listings-slider p-0 my-4'
            >
                {
                   listings ? listings.map((listing) => {
                        return (
                            <SwiperSlide key={listing.id}>
                                <div className="my-4">
                                    <img src={listing.images[0]} className={`w-full ${imageHeight ? imageHeight : `h-[150px]`} rounded-lg ${imageWidth && `w-[${imageWidth}px]`}`} />
                                    <div className="flex justify-between items-center mt-2">
                                        <h2 className="text-sm font-bold w-full">{listing.title}</h2>
                                        <p className="text-black w-full flex justify-end items-center space-x-2">
                                            <AiFillStar className="text-lg" />
                                            <span>{listing.rating}</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }) : []
                }
            </Swiper>
        </>
    )
}

export default HostListings