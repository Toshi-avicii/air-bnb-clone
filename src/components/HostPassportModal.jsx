import DialogModal from "./general/DialogModal"
import { GrClose, GrLanguage } from "react-icons/gr"
import { AiFillStar, AiOutlineHeart, AiOutlineCheck, AiFillFlag } from 'react-icons/ai';
import { LuGraduationCap } from 'react-icons/lu';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { BiDish } from 'react-icons/bi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { PiGlobeStand } from 'react-icons/pi';
import { MdOutlineFreeBreakfast } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
                    <div className="rounded-xl bg-white shadow-lg flex justify-between items-center my-4 p-6 space-x-2">
                        <div className="flex flex-col justify-center items-center flex-1 min-h-full py-2">
                            <img src={hostDetails.profilePic} className="rounded-full w-[110px] h-[110px] mb-2" />
                            <h2 className="text-3xl font-bold">{hostDetails.name}</h2>
                            <p className="text-lg font-bold mt-2">Host</p>
                        </div>
                        <div className="flex-1">
                            <div className="border-b-2 border-gray-300">
                                <h2 className="text-3xl font-bold mb-2">{hostDetails.reviews.length}</h2>
                                <p className="text-sm font-bold mb-2">Reviews</p>
                            </div>

                            <div className="border-b-2 border-gray-300 mt-2">
                                <h2 className="text-3xl font-bold mb-2 flex space-x-2 items-center">
                                    <span>{hostDetails.hostRating}</span>
                                    <AiFillStar className="text-2xl" />
                                </h2>
                                <p className="text-sm font-bold mb-2">Rating</p>
                            </div>

                            <div className="border-b-2 border-gray-300 mt-2">
                                <h2 className="text-3xl font-bold mb-2">{hostDetails.yearsHosting}</h2>
                                <p className="text-sm font-bold mb-2">Years Hosting</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    hostDetails && 
                    <div>
                        <div className="flex space-x-2 items-center my-2">
                            <LuGraduationCap className="text-2xl" />
                            <p className="leading-1">Where I went to school: {hostDetails.school}</p>
                        </div>
                        <div className="flex space-x-2 items-center my-2">
                            <LiaSuitcaseSolid className="text-2xl" />
                            <p className="leading-1">My work: {hostDetails.work}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <AiOutlineHeart className="text-2xl" />
                            <p className="leading-1">I am obsessed with: {hostDetails.obsessions.join(', ')}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <BiDish className="text-2xl" />
                            <p className="leading-1">For guests, I always: {hostDetails.tipsForGuests.join(', ')}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <HiOutlineSparkles className="text-2xl" />
                            <p className="leading-1">What makes my home unique: {hostDetails.uniquePoints.join(', ')}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <GrLanguage className="text-xl" />
                            <p>Speaks: {hostDetails.languages.join(', ')}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <PiGlobeStand className="text-2xl" />
                            <p className="leading-1">Lives in: {hostDetails.info.city}, {hostDetails.info.country}</p>
                        </div>

                        <div className="flex space-x-2 items-center my-2">
                            <MdOutlineFreeBreakfast className="text-2xl" />
                            <p className="leading-1">What&apos;s for breakfast: 
                                {hostDetails.offerBreakfast ? 'I offer breakfast' : "I don't offer breakfast"}
                            </p>
                        </div>
                    </div>
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