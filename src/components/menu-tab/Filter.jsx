import { useState } from 'react'
import {HiOutlineAdjustmentsHorizontal} from 'react-icons/hi2'
import FiltersModal from '../FiltersModal';

function Filter() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  }

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  }

  return (
    <>
      <div className="hidden md:ml-4 md:flex-1 md:flex md:justify-end md:items-center md:px-4" onClick={openFilterModal}>
          <button className='flex items-center border border-gray-300 px-4 py-3 rounded-xl cursor-pointer'>
              <HiOutlineAdjustmentsHorizontal size={20} />
              <span className='font-bold text-xs ml-2'>Filters</span>
          </button>
      </div>
      <FiltersModal 
        isOpen={isFilterModalOpen}
        closeModal={closeFilterModal}
        setOpenFilterModal={setIsFilterModalOpen}
      />
    </>
  )
}

export default Filter