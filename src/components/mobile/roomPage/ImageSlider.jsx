import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function ImageSlider({ images }) {

    return (
        <div className="block lg:hidden">
            <div style={{
                width: `${window.innerWidth}px`
            }}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='overflow-hidden bg-orange-200 max-h-[250px]'
                    style={{
                        padding: 0,
                        width: `${window.innerWidth}px`
                    }}
                >
                    {images && images.map((img, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="h-[250px] relative"
                            >   
                                <img src={img} alt={img} className="h-[250px] object-cover w-full" />   
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ImageSlider