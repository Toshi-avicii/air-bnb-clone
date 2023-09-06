import DialogModal from "./general/DialogModal"
import { GrClose } from "react-icons/gr"
import { AiFillStar, AiOutlineCheck, AiFillFlag } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HostProfileBox from "./HostProfileBox";
import HostFeatures from "./HostFeatures";

function HostPassportModal({ isOpen, setOpenHostPassportModal, closeModal, hostDetails }) {
  return (
    <DialogModal isOpen={isOpen} closeModal={closeModal}>
        <div>
            <div className="p-6 bg-neutral-200">
                <div className="sticky border-b-2 border-gray-200 w-full">
                    <button onClick={closeModal}>
                        <GrClose />
                    </button> 
                </div>
                {
                    hostDetails &&
                    <HostProfileBox hostDetails={hostDetails} />
                }

                {
                    hostDetails && 
                    <HostFeatures hostDetails={hostDetails} />
                }

                
            </div>
            {
                hostDetails &&
                <div className="bg-white p-6">
                    <div>
                        <h2 className="font-semibold text-2xl leading-5">{hostDetails.name}&apos;s reviews</h2>
                    </div>
                    <Swiper
                        modules={[ Navigation ]}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        className='reviews-slider px-0'
                    >
                        {
                            hostDetails.reviews.map((review) => {
                                return (
                                    <SwiperSlide key={review.id} className="mt-6">
                                        <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[150px] flex flex-col justify-between">
                                            <p className="mb-4 font-semibold text-black text-lg">&quot;{review.comment}&quot;</p>
                                            <div>
                                                <h2 className="text-2xl font-bold">{review.from}</h2>
                                                <p className="text-sm text-gray-400">{review.date}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className="mb-6">
                        <button 
                            className="px-4 py-3 border-2 border-black text-lg w-full font-bold rounded-lg"

                        >
                            Show all {hostDetails.reviews.length} reviews
                        </button>
                    </div>

                    <hr className="w-full bg-slate-300 h-[3px]" />

                    <div className="mt-6">
                        <h2 className="font-bold text-2xl">{hostDetails.name}&apos;s confirmed information</h2>

                        <div className="my-4">
                            <div className="flex space-x-3 items-center">
                                <AiOutlineCheck className="text-2xl" />
                                {
                                    hostDetails.info.email && <span className="font-semibold text-xl">Identity</span>
                                }
                            </div>

                            <div className="flex space-x-3 items-center my-4">
                                <AiOutlineCheck className="text-2xl" />
                                {
                                    hostDetails.info.email && <span className="font-semibold text-xl">Email address</span>
                                }
                            </div>

                            <div className="flex space-x-3 items-center">
                                <AiOutlineCheck className="text-2xl" />
                                {
                                    hostDetails.info.phone && <span className="font-semibold text-xl">Phone number</span>
                                }
                            </div>

                            <p className="underline text-lg my-6 font-semibold cursor-pointer">Learn about identity verification</p>
                        </div>

                        <hr className="w-full bg-slate-300 h-[2px]" />
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl my-4">{hostDetails.name}&apos;s listings</h2>
                    </div>
                    <Swiper
                        modules={[ Navigation ]}
                        spaceBetween={20}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        className='listings-slider p-0 my-4'
                    >
                        {
                            hostDetails.listings.map((listing) => {
                                return (
                                    <SwiperSlide key={listing.id}>
                                        <div className="my-4">
                                            <img src={listing.images[0]} className="w-full h-[150px] rounded-lg" />
                                            <div className="flex justify-between items-center mt-2">
                                                <h2 className="text-sm font-bold w-full">{listing.title}</h2>
                                                <p className="text-black w-full flex justify-end items-center space-x-2">
                                                    <AiFillStar className="text-lg" />
                                                    <span>{listing.rating}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <hr className="w-full bg-slate-300 h-[3px]" />
                </div>
            }

            <div className="pb-4 px-6 flex space-x-2 items-center">
                <AiFillFlag className="text-lg" />
                <button className="underline text-lg font-semibold cursor-pointer">Report this profile</button>                
            </div>

        </div>
    </DialogModal>
  )
}

export default HostPassportModal