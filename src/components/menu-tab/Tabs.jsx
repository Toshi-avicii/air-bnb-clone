import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSearchParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import tabs from '../../mockData/navTabData';
import { setSearch, setSearchBtn, setSearchImg, setSearchPara } from '../../helpers/tabMethods';

function Tabs() {
  const [_, setSearchParams] = useSearchParams();

  return (
        <Swiper
            modules={[ Navigation ]}
            spaceBetween={10}
            slidesPerView={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            className='overflow-hidden'
        >
        { tabs.map((img) => {
            return (
                <SwiperSlide 
                    key={img.id} 
                    className='tab-slide pb-2 overflow-hidden flex justify-center items-center min-w-[80px] flex-col cursor-pointer border-b-4 border-white hover:border-b-4 hover:border-gray-300'
                    onClick={setSearch.bind(this, setSearchParams)}
                >
                    <button className='flex justify-center text-b items-center flex-col tab-child' onClick={setSearchBtn.bind(this, setSearchParams)}>
                        <img src={img.icon} alt={img.name} width={35} className='mb-4 tab-child' onClick={setSearchImg.bind(this, setSearchParams)} />
                        <p className='text-gray-400 text-center font-semibold tab-child' style={{ fontSize: 15 }} onClick={setSearchPara.bind(this, setSearchParams)}>{img.name}</p>
                    </button>
                </SwiperSlide>
            )
        }) 
        }
    </Swiper>
  )
}

export default Tabs