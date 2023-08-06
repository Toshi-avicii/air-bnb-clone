import locations from "../mockData/locationData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Locations() {
  return (
    <div className="px-8 my-6">
        <div className="flex justify-between items-center flex-wrap">
            {
                locations.map((location, index) => {
                    return (
                        <div key={index}>
                            <Swiper
                                    modules={[ Navigation, Pagination ]}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className='overflow-hidden max-w-[375px] rounded-2xl bg-slate-300 min-h-[360px]'
                                    style={{
                                        padding: 0
                                    }}
                                >
                                { location.images.map((img, index) => {
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
                                    <h6>{location.mainAddress}</h6>
                                    <p>Rating: {location.rating}</p>
                                </div>
                                <p className="mb-1 text-gray-400">{location.secondaryAddress}</p>
                                <p className="mb-1 text-gray-400">{location.stayDate}</p>
                                <p className="mb-1 font-semibold">${location.price} night</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Locations