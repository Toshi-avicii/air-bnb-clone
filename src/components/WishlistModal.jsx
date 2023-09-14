import DialogModal from "./general/DialogModal"
import { Dialog } from "@headlessui/react"
import { GrClose } from "react-icons/gr"
import { useSelector } from "react-redux"

function WishlistModal({ isOpen, setOpenWishlistModal, closeModal }) {
  const wishlist = useSelector(state => state.appReducers.wishlist.wishlists[0].defaultWishlist);

  return (
    <DialogModal closeModal={closeModal} isOpen={isOpen}>
        <div>
            <div className="border-b-2 border-gray-200 p-6">
                <div className="relative">
                    <Dialog.Title
                        as="h3"
                        className="text-xl text-center leading-6 text-gray-900 font-bold"
                    >
                        Add to Wishlist        
                    </Dialog.Title>
                    <button className='absolute left-0 top-2' onClick={closeModal}>
                        <GrClose />
                    </button> 
                </div>
            </div>

            <div className="p-6 overflow-x-auto flex space-x-6">
                {
                    wishlist.rooms.map((room) => {
                        return (
                            <div key={room.id}>
                                <img 
                                    src={room.roomImage} 
                                    width={250} 
                                    height={250} 
                                    className="rounded-xl ring-2 ring-offset-2 ring-gray-300 shadow-lg cursor-pointer" 
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="border-b-2 border-gray-200 px-6 py-2">
                <h3 className="font-bold text-lg">Rooms {new Date().getFullYear()}</h3>
                <p className="leading-2 font-semibold text-zinc-500 text-sm">{wishlist.totalRooms} saved</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-black text-white rounded-lg w-full py-3">
                    Create new wishlist
                </button>
            </div>
        </div>
    </DialogModal>
  )
}

export default WishlistModal