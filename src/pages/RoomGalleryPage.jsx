/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaChevronLeft } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from "../store/reducers/wishlistReducer";
import { showWishlistToastAddition, showWishlistToastRemoval } from "../store/reducers/globalReducer";
import { useNavigate, useParams } from 'react-router-dom';
import useGetLocationByRoomId from '../hooks/useGetLocationByRoomId';
import WishlistModal from '../components/WishlistModal';
import WishlistToast from '../components/WishlistToast';

function RoomGalleryPage() {
  const { roomId } = useParams();
  const room = useGetLocationByRoomId(roomId);
  const [isLiked, setIsLiked] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.appReducers.wishlist.wishlists[0].defaultWishlist.rooms);
  const navigate = useNavigate();

  console.log(room);
  
  const likeHandler = () => {
    setIsLiked((prev) => !prev); 

    setDisplayToast(true);

    const foundedRoom = wishlist.find((room) => {
        return room.id === roomId;
    });

    if(foundedRoom) {
        dispatch(removeFromWishlist({ roomId: roomId }))
    } 

    if(!foundedRoom) {
        dispatch(addToWishlist({
            id: roomId,
            roomImage: room.images[0],
            address: room.mainAddress,
            secondaryAddress: room.stay,
            stay: room.stayDate,
            rating: room.rating,
            category: room.category,
            roomOwner: room.roomOwner,
            price: Math.round(Number(`${((room.pricePerNight * 7) + (room.pricePerNight * 10 / 100))}`))
        }));
    }

    if(isLiked) {
        dispatch(showWishlistToastRemoval());
    } else {
        dispatch(showWishlistToastAddition());
    }
  }

  const closeWishlistModal = () => {
    setIsWishlistModalOpen(false);
  }

  const backHandler = (e) => {
    navigate(-1);
  }

  useEffect(() => {
    wishlist.find((room) => {
        if(room.id === roomId) {
            setIsLiked(true);
        }
    })

  }, [wishlist, roomId]);

  useEffect(() => {
    if(displayToast) {
        setTimeout(() => {
            setDisplayToast(false);
        }, 3000);
    }
  }, [displayToast]);

  useEffect(() => {
    if(isLiked) {
        setIsWishlistModalOpen(true);
    }
  }, [isLiked]);

  return (
    <div>
        <div className="px-8 py-6 flex justify-between items-center bg-white sticky top-0 w-full">
            <div>
                <button className='cursor-pointer flex items-center' onClick={backHandler}>
                    <FaChevronLeft className='text-lg' />
                </button>
            </div>
            <div className='flex items-center space-x-3'>
                <button className='flex items-center space-x-2 cursor-pointer'>
                    <FiShare className='text-lg' />
                    <span className='underline font-semibold'>Share</span>
                </button>

                <button className='flex items-center space-x-2 cursor-pointer' onClick={likeHandler}>
                    {
                        isLiked ?
                        <AiFillHeart className='text-lg' /> :
                        <AiOutlineHeart className='text-lg' />
                    }
                    <span className='underline font-semibold'>Save</span>
                </button>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <div className={`grid grid-cols-2 place-items-center w-[60%] gap-2 my-6`}>
                <>
                    <img src={room?.images ? room?.images[0] : null} alt="roomImage" className='w-full col-span-2 h-[600px]' />
                    {
                        room?.images ? room?.images.map((image, index) => {
                            let content = '';
                            if(index === 0) {
                                return;
                            }

                            if(index !== 0) {
                                content = <img src={image} key={index} className='h-[350px] w-full' />
                            }
                            
                            return content
                        }) : 'No images to show, please go back'
                    }
                </>
                
            </div>
        </div>

        <WishlistModal
            isOpen={isWishlistModalOpen} 
            setOpenWishlistModal={setIsWishlistModalOpen} 
            closeModal={closeWishlistModal} 
        />
        {
            displayToast && <WishlistToast wishlist={wishlist} />
        }
    </div>
  )
}

export default RoomGalleryPage