import amazingViews from '../../assets/amazing-views.jpg'
import rooms from '../../assets/rooms.jpg';
import beachFront from '../../assets/beachfront.jpg';
import cabins from '../../assets/cabins.jpg';
import luxe from '../../assets/luxe.jpg';
import play from '../../assets/play.jpg';
import omg from '../../assets/omg.jpg';
import lakefront from '../../assets/lakefront.jpg';
import treeHouses from '../../assets/treehouses.jpg';
import farms from '../../assets/farms.jpg';
import design from '../../assets/design.jpg';
import earthHomes from '../../assets/earth-homes.jpg';
import iconicSites from '../../assets/iconic-sites.jpg';
import bedAndBreakfast from '../../assets/bed-and-breakfast.jpg'
import tinyHomes from '../../assets/tiny-homes.jpg';
import historicHomes from '../../assets/historical-homes.jpg';
import tropical from '../../assets/tropical.jpg';
import trending from '../../assets/trending.jpg';
import nationalParks from '../../assets/national-parks.jpg';
import countrySide from '../../assets/countryside.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Tabs() {
  const tabs = [
    {
        id: 1,
        name: `Amazing Views`,
        icon: amazingViews
    },
    {
        id: 2,
        name: 'Rooms',
        icon: rooms
    },
    {
        id: 3,
        name: 'Beach Front',
        icon: beachFront
    },
    {
        id: 4,
        name: 'Cabins',
        icon: cabins
    },
    {
        id: 5,
        name: 'Luxe',
        icon: luxe
    },
    {
        id: 6,
        name: 'Play',
        icon: play
    },
    {
        id: 7,
        name: 'OMG',
        icon: omg
    },
    {
        id: 8,
        name: 'Lake Front',
        icon: lakefront
    },
    {
        id: 9,
        name: 'Tree Houses',
        icon: treeHouses
    },
    {
        id: 10,
        name: 'Farms',
        icon: farms
    },
    {
        id: 11,
        name: 'Design',
        icon: design
    },
    {
        id: 12,
        name: 'Earth Homes',
        icon: earthHomes
    },
    {
        id: 13,
        name: 'Iconic Sites',
        icon: iconicSites
    },
    {
        id: 14,
        name: 'Bed And Breakfast',
        icon: bedAndBreakfast
    },
    {
        id: 15,
        name: 'Tiny Homes',
        icon: tinyHomes
    },
    {
        id: 16,
        name: 'Historic Homes',
        icon: historicHomes
    },
    {
        id: 17,
        name: 'Tropical',
        icon: tropical
    },
    {
        id: 18,
        name: 'Trending',
        icon: trending
    },
    {
        id: 19,
        name: 'National Parks',
        icon: nationalParks
    },
    {
        id: 20,
        name: 'Countryside',
        icon: countrySide
    }
  ];

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
                    className='tab-slide pb-2 flex justify-center items-center min-w-[80px] flex-col cursor-pointer hover:border-b-4 hover:border-gray-300'
                >
                    <img src={img.icon} alt={img.name} width={35} className='mb-4' />
                    <p className='text-gray-400 text-center font-semibold' style={{ fontSize: 15 }}>{img.name}</p>
                </SwiperSlide>
            )
        }) 
        }
    </Swiper>
  )
}

export default Tabs