import DialogModal from "./general/DialogModal"
import { GrClose } from "react-icons/gr"
import { capitalize } from '../helpers/misc';
import { MdOutlineBathtub } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeWashMachine } from "react-icons/cg";

function AmenitiesModal({ closeModal, isOpen, amenities }) {
    console.log(amenities);

    return (
        <DialogModal closeModal={closeModal} isOpen={isOpen}>
            <div className="border-b-2 border-gray-200 p-6">
                <div className="relative">
                    <button className='absolute left-0 -top-1' onClick={closeModal}>
                        <GrClose />
                    </button>
                </div>
            </div>

            <div className="mt-4 p-6">
                <h1 className="font-bold text-2xl">What this place offers</h1>
            </div>

            <div className="mt-2 mb-4 p-4">
                {
                  amenities && Object.entries(amenities).map(([key, value]) => {
                    return (
                        value ? 
                        <div key={key} className="border-b border-gray-400 px-4 py-4 flex items-center">
                            {
                                key === 'wifi' ? 
                                <AiOutlineWifi className="text-lg" /> :
                                key === 'washer' ? 
                                <CgSmartHomeWashMachine className="text-lg" /> :
                                <MdOutlineBathtub className="text-lg" />
                            }
                            <p className="ml-4 text-lg">{capitalize(key)}</p>
                        </div> :
                        <div key={key} className="border-b border-gray-400 px-4 py-4 flex items-center">
                             {
                                key === 'wifi' ? 
                                <AiOutlineWifi className="text-lg" /> :
                                key === 'washer' ? 
                                <CgSmartHomeWashMachine className="text-lg" /> :
                                <MdOutlineBathtub className="text-lg" />
                            }
                            <del className="ml-4 text-lg">{capitalize(key)}</del>
                        </div>
                    )
                  })  
                }
            </div>
        </DialogModal>
    )
}

export default AmenitiesModal