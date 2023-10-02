import { useSelector } from "react-redux"

function WishlistToast({ wishlist }) {

  const isBeingRemovedFromWishlist = useSelector(state => state.appReducers.global.isBeingRemovedFromWishlist);
  const isBeingAddedToWishlist = useSelector(state => state.appReducers.global.isBeingAddedToWishlist);

  return (
    <div className="p-4 rounded-lg flex justify-between items-center fixed bottom-24 lg:bottom-10 left-6 z-[20] bg-white shadow-md">
        <div className="flex items-center">
            <img src={wishlist[0]?.roomImage} className="max-w-[70px] max-h-[70px] rounded-lg" />
            <div className="ml-4 flex items-center space-x-2">
                <p className="text-zinc-700 text-sm">
                    {
                        (isBeingAddedToWishlist && !isBeingRemovedFromWishlist) && "Saved To"
                    }

                    {
                        (!isBeingAddedToWishlist && isBeingRemovedFromWishlist) && "Removed From"
                    }
                    
                </p>
                <h3 className="font-bold">Rooms {new Date().getFullYear()}</h3>
            </div>
        </div>
        {
            (isBeingAddedToWishlist && !isBeingRemovedFromWishlist) && 
            <button className="underline ml-6">Change</button>
        }
    </div>
  )
}

export default WishlistToast