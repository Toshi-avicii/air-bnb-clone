import { FaChevronLeft } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import WishlistModal from '../../WishlistModal';
import WishlistToast from '../../WishlistToast';

function MobileRoomNavbar({ roomId }) {
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

    const navigate = useNavigate();
    const navigateBack = (e) => {
        navigate(-1)
    }
  return (
    <div className="absolute top-0 left-0 z-10 w-full p-4 flex items-center lg:hidden">
        <div className='flex-[2]'>
            <button onClick={navigateBack} className="p-3 bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center">
                <FaChevronLeft className='text-xl' />
            </button>
        </div>
        <div className='flex-1 flex justify-between items-center'>
            <div className="p-2 bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center">
                <FiShare className='text-lg' />
            </div>

            <button 
                className="p-2 bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center"
                onClick={likeHandler}
            >
                {
                    isLiked ?
                    <AiFillHeart className='text-lg' /> :
                    <AiOutlineHeart className='text-lg' />
                }
            </button>
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

export default MobileRoomNavbar