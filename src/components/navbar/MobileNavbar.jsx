import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2'

function MobileNavbar() {
  return (
    <div className="p-4 sticky top-0 z-[15] flex justify-between items-center md:hidden bg-white">
        {/* button input */}
        <div className='rounded-full ring-slate-300 ring-1 shadow-md flex justify-between items-center flex-[9] mr-4'>
            <div className='p-4 mr-2 flex-1'>
                <AiOutlineSearch className='text-xl' />
            </div>
            <div className='flex-[10] mb-2'>
                <button>
                    <p className='text-sm font-bold text-left mb-1'>Anywhere</p>
                    <div className='flex justify-evenly place-items-center text-left'>
                        <span className='text-xs'>Any week</span>
                        <div className='w-[3px] h-[3px] rounded-full bg-black mx-4'></div>
                        <span className='text-xs'>Add guests</span>
                    </div>
                </button>
            </div>
        </div>

        {/* filters button */}
        <div className='flex-1'>
            <button className='p-3 rounded-full flex justify-center items-center border border-gray-400'>
                <HiOutlineAdjustmentsVertical className='text-lg' />
            </button>
        </div>
    </div>
  )
}

export default MobileNavbar