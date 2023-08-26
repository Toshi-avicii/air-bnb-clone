import { Dialog } from "@headlessui/react"
import DialogModal from "./general/DialogModal"
import { GrClose } from "react-icons/gr"
import { BiHome } from 'react-icons/bi';
import { MdApartment, MdOutlineVilla } from 'react-icons/md';
import ToggleSwitch from '../components/general/ToggleSwitch';
import { useState } from "react";
// import { useEffect } from "react";
import ReactSlider from 'react-slider'

function FiltersModal({ isOpen, setOpenFilterModal, closeModal }) {
  const btns = ['any', 1, 2, 3, 4, 5, 6, 7, '8+'];
  const bathBtnsArr = ['any', 1, 2, 3, 4, 5, 6, 7, '8+'];

  const [filters, setFilters] = useState({
        minPrice: 1,
        maxPrice: 100,
        bedRooms: 'any',
        bathRooms: 'any',
        propertyType: [],
        amenities: {
            wifi: false,
            kitchen: false,
            privateBath: false,
            washer: false,
            dryer: false,
            ac: false
        },
        bookingOptions: {
            instantBook: false,
            selfCheckIn: false
        },
        accessibility: {
            stepFreeGuest: false,
            guest32: false,
            parking: false,
            stepFreePath: false
        },
        superhost: false,
        airbnbPlus: false,
        hostLangs: []
  });

  const minHandler = (e) => {
    setFilters({ ...filters, minPrice: Number(e.target.value) });
  }

  const maxHandler = (e) => {
    setFilters({ ...filters, maxPrice: Number(e.target.value) });
  }

  const sliderChangeHandler = (newVal) => {
    setFilters({ ...filters, minPrice: newVal[0], maxPrice: newVal[1] });
  }

//   const bedBtns = document.querySelectorAll('.bed-btn');
//   const bathBtns = document.querySelectorAll('.bath-btn');
  
//   useEffect(() => {
//       if(bedBtns) {
//         bedBtns[0].classList.add('bg-black');
//         bedBtns[0].classList.remove('text-slate-500');
//         bedBtns[0].classList.add('text-white');
//       }
    
//       if(bathBtns) {
//         bathBtns[0].classList.add('bg-black');
//         bathBtns[0].classList.remove('text-slate-500');
//         bathBtns[0].classList.add('text-white');
//       }
//   }, [bathBtns, bedBtns]);

  const clickHandler = (e) => {
    const bedBtns = document.querySelectorAll('.bed-btn');
    bedBtns.forEach((btn) => {
        btn.classList.remove('bg-black');
        btn.classList.remove('text-white');
    });

    e.target.classList.add('bg-black');
    e.target.classList.remove('text-slate-500');
    e.target.classList.add('text-white');

    setFilters({
        ...filters, 
        bedRooms: e.target.innerText === 'Any' ? e.target.innerText : Number(e.target.innerText)
    })
  }

  const bathClickHandler = (e) => {
    const bathBtns = document.querySelectorAll('.bath-btn');
    bathBtns.forEach((btn) => {
        btn.classList.remove('bg-black');
        btn.classList.remove('text-white');
    });

    e.target.classList.add('bg-black');
    e.target.classList.remove('text-slate-500');
    e.target.classList.add('text-white');
    setFilters({
        ...filters, 
        bathRooms: e.target.innerText === 'Any' ? e.target.innerText : Number(e.target.innerText)
    })
  }

  const filterHandler = (e) => {
    console.log(filters);
  }

  return (
    <DialogModal closeModal={closeModal} isOpen={isOpen} maxWidthProp={700}>
        <div className="relative">
            <div>
                <div className="border-b-2 border-gray-200 p-6">
                    <div className="relative">
                        <Dialog.Title
                            as="h3"
                            className="text-xl text-center leading-6 text-gray-900 font-bold"
                        >
                            Filters
                        </Dialog.Title>
                        <button className='absolute left-0 top-2' onClick={closeModal}>
                            <GrClose />
                        </button> 
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl">Price Range</h2>
                    <p className="text-zinc-500 text-lg mb-4">The average highly price is $83, not including fees or taxes.</p>
                    {/* rest of the slider and inputs here */}
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center my-5 w-[70%] flex-col">
                            <ReactSlider 
                                className="h-[3px] bg-slate-200 relative w-full rounded-full"
                                thumbClassName="w-[40px] h-[40px] rounded-full shadow-md bg-white flex justify-center items-center absolute -top-4 cursor-pointer"
                                trackClassName="example-track"
                                defaultValue={[filters.minPrice, filters.maxPrice]}
                                value={[filters.minPrice, filters.maxPrice]}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                min={1}
                                max={100}
                                pearling
                                minDistance={10}
                                onChange={sliderChangeHandler}
                            />
                            <div className="flex items-center justify-between mb-8 mt-16 w-full space-x-4">
                                <div className="border border-zinc-400 rounded-lg p-3 w-full">
                                    <p>Minimum</p>
                                    <div className="flex items-center space-x-2">
                                        <span>$</span>
                                        <input type="number" min={1} max={100} value={filters.minPrice} className="w-full focus:outline-none" onChange={minHandler} />
                                    </div>
                                </div>

                                <div>
                                    <hr className="w-[25px] h-[2px] bg-black" />
                                </div>

                                <div className="border border-zinc-400 rounded-lg p-3 w-full">
                                    <p>Maximum</p>
                                    <div className="flex items-center space-x-2">
                                        <span>$</span>
                                        <input type="number" min={1} max={100} value={filters.maxPrice} className="w-full focus:outline-none" onChange={maxHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* beds and bathrooms */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl">Beds and Bathrooms</h2>
                    <div className="my-5">
                        <h2 className="text-xl text-zinc-500 mb-4 font-semibold">Beds</h2>
                        <div className="flex space-x-3">
                            {
                                btns.map((btn, index) => {
                                    return (
                                        <button key={index} className="bed-btn px-6 py-2 rounded-full border border-gray-400 text-lg font-semibold text-slate-500 min-w-[90px]" onClick={clickHandler}>
                                            {btn === 'any' ? "Any" : btn }
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <div className="my-5">
                        <h2 className="text-xl text-zinc-500 mb-4 font-semibold">Bathrooms</h2>
                        <div className="flex space-x-3">
                            {
                                bathBtnsArr.map((btn, index) => {
                                    return (
                                        <button key={index} className="bath-btn px-6 py-2 rounded-full border border-gray-400 text-lg font-semibold text-slate-500 min-w-[90px]" onClick={bathClickHandler}>
                                            {btn === 'any' ? "Any" : btn }
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* property type */}
            <div className="p-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl">Property type</h2>
                    <div className="flex space-x-3 items-start mt-5 mb-7">
                        <button className="border-2 border-gray-300 rounded-lg p-4 min-w-[175px] min-h-[125px] flex items-start flex-col justify-between">
                            <BiHome className="text-4xl mb-3" />
                            <span className="text-xl text-left w-full font-semibold text-black">House</span>
                        </button>

                        <button className="border-2 border-gray-300 rounded-lg p-4 min-w-[175px] min-h-[125px] flex items-start flex-col justify-between">
                            <MdApartment className="text-4xl mb-3" />
                            <span className="text-xl text-left w-full font-semibold text-black">Apartment</span>
                        </button>

                        <button className="border-2 border-gray-300 rounded-lg p-4 min-w-[175px] min-h-[125px] flex items-start flex-col justify-between">
                            <MdOutlineVilla className="text-4xl mb-3" />
                            <span className="text-xl text-left w-full font-semibold text-black">Guesthouse</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* amenities */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl">Amenities</h2>
                    <div className="my-5">
                        <h2 className="text-xl text-zinc-500 mb-4 font-semibold">Essentials</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center w-full mb-4">
                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <p className="text-lg">Wifi</p>
                                </div>

                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <p className="text-lg">Kitchen</p>
                                </div>
                            </div>

                            <div className="flex items-center w-full mb-4">
                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <div>
                                        <p className="font-semibold text-black text-lg">Private attached bathroom</p>
                                        <p className="text-zinc-400">
                                            A bathroom that &apos;s connected to your room and just for you.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <p className="text-lg">Washer</p>
                                </div>
                            </div>

                            <div className="flex items-center w-full mb-4">
                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <p className="text-lg">Dryer</p>
                                </div>

                                <div className="flex space-x-4 items-center w-full">
                                    <input 
                                        type="checkbox" 
                                        id="link" 
                                        className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                                    />
                                    <p className="text-lg">Air Conditioning</p>
                                </div>
                            </div>

                            <div className="my-5">
                                <button className="font-bold underline text-lg text-black">Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* booking options */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl mt-4">Booking Options</h2>
                    <div className="my-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Instant Book</h2>
                                <p className="text-sm text-zinc-800">Listings you can book without waiting for Host approval</p>
                            </div>
                            <div className="mr-16">
                                <ToggleSwitch />
                            </div>
                        </div>

                        <div className="flex justify-between items-center my-5">
                            <div>
                                <h2 className="text-xl font-semibold">Self check-in</h2>
                                <p className="text-sm text-zinc-800">Easy access to the property once you arrive</p>
                            </div>
                            <div className="mr-16">
                                <ToggleSwitch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* accessibility features */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl mt-4">Accessibility features</h2>
                    <p className="text-black my-4 font-semibold text-lg">Guest entrance and parking</p>
                    <div className="flex items-center my-4">
                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">Step free guest entrance</p>
                        </div>

                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">Guest entrance wider than 32 inches</p>
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">Accessible parking spot</p>
                        </div>

                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">Step free path to the guest entrance</p>
                        </div>
                    </div>

                    <div className="my-5">
                        <button className="font-bold underline text-lg text-black">Show more</button>
                    </div>
                </div>
            </div>

            {/* top tier stays */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl mt-4">Top tier stays</h2>
                    <div className="my-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Superhost</h2>
                                <p className="text-sm text-zinc-800">Stay with recognized hosts</p>
                                <button className="underline text-black font-bold text-sm">Learn more</button>
                            </div>
                            <div className="mr-16">
                                <ToggleSwitch />
                            </div>
                        </div>

                        <div className="flex justify-between items-center my-5">
                            <div>
                                <h2 className="text-xl font-semibold">Airbnb plus</h2>
                                <p className="text-sm text-zinc-800">Every plus home is reviewed for quality</p>
                            </div>
                            <div className="mr-16">
                                <ToggleSwitch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* host languages */}
            <div className="px-6">
                <div className="border-b-2 border-slate-200">
                    <h2 className="font-bold text-2xl mt-4">Host languages</h2>
                    
                    <div className="flex items-center my-4">
                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">English</p>
                        </div>

                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">French</p>
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">German</p>
                        </div>

                        <div className="w-full flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="link" 
                                className='w-6 h-6 rounded-lg indeterminate:bg-purple-300 border border-black accent-black mix-blend-multiply cursor-pointer'
                            />
                            <p className="text-lg">Japanese</p>
                        </div>
                    </div>

                    <div className="my-5">
                        <button className="font-bold underline text-lg text-black">Show more</button>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 left-0 w-full px-6 py-4 border-t-2 border-slate-200 flex justify-between items-center">
                <button className="underline font-bold">Clear all</button>
                <button className="bg-black px-4 py-2 rounded-lg text-white" onClick={filterHandler}>Show Results</button>
            </div>
        </div>
    </DialogModal>
  )
}

export default FiltersModal