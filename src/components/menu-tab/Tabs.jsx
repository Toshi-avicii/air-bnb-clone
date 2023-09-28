import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSearchParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import tabs from '../../mockData/navTabData';
import { setSearch, setSearchBtn, setSearchImg, setSearchPara } from '../../helpers/tabMethods';
import { useEffect, useState } from 'react';

function Tabs() {
    const [_, setSearchParams] = useSearchParams();

    const [swiperSlides, setSwiperSlides] = useState(10);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 480) {
                setSwiperSlides(3);
            } else if(window.innerWidth > 480 && window.innerWidth <= 768) {
                setSwiperSlides(8);
            } else {
                setSwiperSlides(10);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={swiperSlides}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            className='overflow-hidden tab-slider'
        >
            {tabs.map((img) => {
                return (
                    <SwiperSlide
                        key={img.id}
                        className='tab-slide pb-2 overflow-hidden flex justify-center items-center min-w-[50px] md:min-w-[80px] flex-col cursor-pointer border-b-4 border-white hover:border-b-4 hover:border-gray-300'
                        onClick={setSearch.bind(this, setSearchParams)}
                    >
                        <button className='flex justify-center text-b items-center flex-col tab-child' onClick={setSearchBtn.bind(this, setSearchParams)}>
                            <img src={img.icon} alt={img.name} className='mb-2 md:mb-4 tab-child w-[30px] md:w-[35px]' onClick={setSearchImg.bind(this, setSearchParams)} />
                            <p className='text-gray-400 text-center font-semibold tab-child text-sm md:text-base' onClick={setSearchPara.bind(this, setSearchParams)}>{img.name}</p>
                        </button>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}

export default Tabs