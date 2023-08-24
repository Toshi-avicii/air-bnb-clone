import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import WishlistModal from "./WishlistModal";
import { addToWishlist, removeFromWishlist } from "../store/reducers/wishlistReducer";

function LocationCardSlider({ 
    sliderId, 
    images,
    mainAddress,
    secondaryAddress,
    rating,
    stayDate,
    price,
    roomOwner,
    category
}) {
    const [isLiked, setIsLiked] = useState(false);
    const shouldDisplayTaxes = useSelector(state => state.appReducers.global.displayTaxes);
    const wishlist = useSelector(state => state.appReducers.wishlist.wishlists[0].defaultWishlist.rooms);
    const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
    const dispatch = useDispatch();
    const loginEmail = useSelector(state => state.appReducers.profile.email);

    const likeHandler = () => {
        setIsLiked((prev) => !prev); 

        const foundedRoom = wishlist.find((room) => {
            return room.id === sliderId;
        });

        if(foundedRoom) {
            dispatch(removeFromWishlist({ roomId: sliderId }))
        } 

        if(!foundedRoom) {
            dispatch(addToWishlist({
                id: sliderId,
                roomImage: images[0],
                mainAddress,
                secondaryAddress,
                stay: stayDate,
                rating,
                category,
                roomOwner,
                price: Math.round(Number(`${((price * 7) + (price * 10 / 100))}`))
            }));
        }
        
    }

    const closeWishlistModal = () => {
        setIsWishlistModalOpen(false);
    }

    useEffect(() => {

        wishlist.find((room) => {
            if(room.id === sliderId) {
                setIsLiked(true);
            }
        })

    }, [wishlist, sliderId]);

    useEffect(() => {
        if(isLiked) {
            setIsWishlistModalOpen(true);
        }
    }, [isLiked])


  return (
    <>
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
        {
            loginEmail && 
            <div className="absolute top-2 z-10 right-2 w-[50px] h-[50px] flex justify-center items-center">
                <button className="cursor-pointer" onClick={likeHandler}>
                    {
                        isLiked ? 
                            <AiFillHeart className="text-3xl text-red-400" /> : 
                            <AiOutlineHeart className="text-3xl text-white" />
                    }
                </button>
            </div>
        }

        {
            roomOwner &&
            <div className="absolute bottom-44 z-[2] left-4 w-[75px] h-[85px] flex justify-center items-center bg-zinc-300 rounded-r-xl after:absolute after:left-2 after:h-[85px] after:w-[1px] after:bg-slate-500">
                <img src={roomOwner} className="w-[45px] h-[45px] rounded-full" />
            </div>
        }

    </div>
    <WishlistModal 
        isOpen={isWishlistModalOpen} 
        setOpenWishlistModal={setIsWishlistModalOpen} 
        closeModal={closeWishlistModal} 
    />
    <div className="p-4 rounded-lg flex justify-between items-center fixed bottom-10 left-6 z-10 bg-white shadow-sm">
        <div className="flex items-center">
            <img src={wishlist[0].roomImage} className="max-w-[70px] max-h-[70px] rounded-lg" />
            <div className="ml-4 flex items-center space-x-2">
                <p className="text-zinc-500">Saved To</p>
                <h3 className="font-bold">Rooms {new Date().getFullYear()}</h3>
            </div>
        </div>
        <button className="underline ml-6">Change</button>
    </div>
    </>
  )
}

export default LocationCardSlider