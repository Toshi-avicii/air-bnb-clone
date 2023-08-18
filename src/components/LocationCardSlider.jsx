import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from "react";
import { useSelector } from 'react-redux';

function LocationCardSlider({ 
    sliderId, 
    images,
    mainAddress,
    secondaryAddress,
    rating,
    stayDate,
    price,
    roomOwner
}) {
    const [isLiked, setIsLiked] = useState(false);
    const shouldDisplayTaxes = useSelector(state => state.appReducers.global.displayTaxes);

    const likeHandler = () => {
        setIsLiked((prev) => !prev);
    }

  return (
    <div key={sliderId} className="relative">
        <Swiper
                modules={[ Navigation, Pagination ]}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                className='overflow-hidden max-w-[375px] rounded-2xl bg-slate-300 min-h-[360px]'
                style={{
                    padding: 0
                }}
            >
            { images && images.map((img, index) => {
                return (
                    <SwiperSlide 
                        key={index} 
                        className="min-h-[360px] max-w-[375px] relative"
                    >
                        <div className="absolute left-0 top-0 min-h-[360px]" style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            width: '100%'
                        }}></div>
                        <img src={img} alt={img} className="min-h-[360px] max-w-[375px] object-cover" />
                    </SwiperSlide>
                )
            }) 
            }
        </Swiper>
        <div className="p-3">
            <div className="flex justify-between items-center my-1 font-semibold">
                <h6>{mainAddress}</h6>
                <p>Rating: {rating}</p>
            </div>
            <p className="mb-1 text-gray-400">{secondaryAddress}</p>
            <p className="mb-1 text-gray-400">
                {shouldDisplayTaxes ? `7 nights, ${stayDate}` : stayDate}
            </p>
            <p className="mb-1 font-semibold">
                ${ 
                    shouldDisplayTaxes ? `${((price * 7) + (price * 10 / 100))}` : 
                    price
                } 
                <span className="underline">
                    {
                        shouldDisplayTaxes ? ' total before taxes' : ' night'
                    }
                </span>
            </p>
        </div>
        <div className="absolute top-2 z-10 right-2 w-[50px] h-[50px] flex justify-center items-center">
            <button className="cursor-pointer" onClick={likeHandler}>
                {
                    isLiked ? 
                        <AiFillHeart className="text-3xl text-red-400" /> : 
                        <AiOutlineHeart className="text-3xl text-white" />
                }
            </button>
        </div>

        {
            roomOwner &&
            <div className="absolute bottom-44 z-[2] left-4 w-[75px] h-[85px] flex justify-center items-center bg-zinc-300 rounded-r-xl after:absolute after:left-2 after:h-[85px] after:w-[1px] after:bg-slate-500">
                <img src={roomOwner} className="w-[45px] h-[45px] rounded-full" />
            </div>
        }

    </div>
  )
}

export default LocationCardSlider