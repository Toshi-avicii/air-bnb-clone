import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSearchParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import tabs from '../../mockData/navTabData';

function Tabs() {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const formatCategory = (category) => {
    const strArr = category.split(' ');
    const catStr = strArr.join('_')
    setSearchParams({ category: catStr });
  }

  function setActiveTabStyle(btn) {
    const tabSlides = document.querySelectorAll('.tab-slide');

    const tabF = Array.from(tabSlides).find((tab) => {
        Array.from(tabSlides).forEach(el => {
            el.classList.remove('border-b-black');
            let para = el.children[0].children[1];
            para.classList.remove('text-black');
            para.classList.add('text-gray-400');
        });
        return btn.childNodes[1].innerText === tab.children[0].children[1].innerText;
    })

    tabF.classList.add("border-b-black");
    let para = tabF.children[0].children[1];
    para.classList.remove('text-gray-400');
    para.classList.add('text-black');
  }

  const setSearch = (e) => {
    const btn = e.target.children[0];

    if(e.target.classList.contains('tab-slide')) {
        setActiveTabStyle(btn);
        
        let searchCategoryText = btn.childNodes[1].innerText.toLowerCase();
        if(searchCategoryText.includes(' ')) {
            formatCategory(searchCategoryText);
            return;
        }
        setSearchParams({ category: searchCategoryText });
    }
  }

  const setSearchBtn = (e) => {
    e.stopPropagation();
    setActiveTabStyle(e.target);
    if(e.target.children) {
        const searchCategoryText = e.target.children[1].innerText.toLowerCase();
        if(searchCategoryText.includes(' ')) {
            formatCategory(searchCategoryText);
            return;
        }
        setSearchParams({ category: searchCategoryText });
    }
  }

  const setSearchImg = (e) => {
    setActiveTabStyle(e.target.parentElement);
    e.stopPropagation();
    const searchCategoryText = e.target.nextSibling.innerText.toLowerCase();
    if(searchCategoryText.includes(' ')) {
        formatCategory(searchCategoryText);
        return;
    }
    setSearchParams({ category: searchCategoryText });
  }

  const setSearchPara = (e) => {
    e.stopPropagation();
    setActiveTabStyle(e.target.parentElement);
    const searchCategoryText = e.target.innerText.toLowerCase();
    if(searchCategoryText.includes(' ')) {
        formatCategory(searchCategoryText);
        return;
    }
    setSearchParams({ category: searchCategoryText });
  }

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
                    onClick={setSearch}
                >
                    <button className='flex justify-center text-b items-center flex-col tab-child' onClick={setSearchBtn}>
                        <img src={img.icon} alt={img.name} width={35} className='mb-4 tab-child' onClick={setSearchImg} />
                        <p className='text-gray-400 text-center font-semibold tab-child' style={{ fontSize: 15 }} onClick={setSearchPara}>{img.name}</p>
                    </button>
                </SwiperSlide>
            )
        }) 
        }
    </Swiper>
  )
}

export default Tabs