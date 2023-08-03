import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className='flex-1'>
    <div className='search-bar ring-slate-300 ring-1 flex py-3 px-1 rounded-[50px] justify-between items-center w-[85%]'>
      <div className='border-r-[1px] border-r-[#aaa] mr-1'>
        <p className='mx-3 font-semibold'>Anywhere</p>
      </div>
      <div className='border-r-[1px] border-r-[#aaa]'>
        <p className='mx-3 font-semibold'>Any week</p>
      </div>
      <div className='mx-3 flex items-center'>
        <input type="text" name="search" id="search" placeholder="Add Guests" className='w-[100px] outline-none' />
        <button className="rounded-full bg-red-500 p-2 mx-2">
          <AiOutlineSearch className='text-white font-bold cursor-pointer' />
        </button>
      </div>
    </div>
    </div>
  )
}

export default SearchBar