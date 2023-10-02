function RoomBottomBar({ selectedDateRange, roomPrice }) {
  return (
    <div className="shadow-lg border-t border-gray-400 fixed bottom-0 left-0 w-full bg-white z-10 p-4 flex justify-between lg:hidden">
      <div>
        <p className="font-semibold mb-1 text-lg">${roomPrice} per night</p>
        <p className="underline text-sm">{selectedDateRange.from}-{selectedDateRange.to}</p>
      </div>
      <div>
        <button className="black-btn px-8">
          Reserve
        </button>
      </div>
    </div>
  )
}

export default RoomBottomBar