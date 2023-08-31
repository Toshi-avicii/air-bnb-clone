import { BsTranslate } from 'react-icons/bs'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi'
import { addToWishlist, removeFromWishlist } from "../../store/reducers/wishlistReducer";
import { showWishlistToastAddition, showWishlistToastRemoval } from "../../store/reducers/globalReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import WishlistModal from '../WishlistModal';
import WishlistToast from '../WishlistToast';

function RoomHeader({
    title,
    rating,
    address,
    noOfReviews,
    isSuperHost,
    roomId,
    firstImage,
    stay,
    stayDate,
    category,
    roomOwner,
    price
}) {

  const wishlist = useSelector(state => state.appReducers.wishlist.wishlists[0].defaultWishlist.rooms);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

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
            roomImage: firstImage,
            address,
            secondaryAddress: stay,
            stay: stayDate,
            rating,
            category,
            roomOwner,
            price: Math.round(Number(`${((price * 7) + (price * 10 / 100))}`))
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
        <div className='flex space-x-2 items-center'>
            <BsTranslate className='text-2xl' />
            <h1 className='text-3xl font-semibold'>{title}</h1>
        </div>        
        <div className='flex justify-between items-center my-2'>
            <div className='flex items-center space-x-2'>
                <div className='flex items-center space-x-2'>
                    <AiFillStar className='text-lg' />
                    <span className='font-semibold'>{rating}</span>
                </div>
                <div>
                    <span className='underline font-bold'>{noOfReviews} reviews</span>
                </div>
                { isSuperHost && 
                    <div className='flex items-center space-x-2'>
                        <span className='font-semibold'>Superhost</span>
                    </div> 
                }
                <div className=''>
                    <span className='underline font-bold'>{address}</span>
                </div>
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
                    <span className='underline font-semibold'>Like</span>
                </button>
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

export default RoomHeader