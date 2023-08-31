function RoomImageGrid({
    images
}) {
  return (
    <div className="my-6">
        {
            images.length > 0 &&
            <div className="grid grid-rows-2 grid-cols-4 gap-3 rounded-lg">
                <div className="col-start-1 row-start-1 col-span-2 row-span-2 cursor-pointer">
                    <img src={images[0]} className="object-cover w-full rounded-tl-xl rounded-bl-xl" />
                </div>
                
                <div className="col-start-3 row-start-1 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[1]} />
                </div>

                <div className="col-start-4 row-start-1 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[2]} className="rounded-tr-xl" />
                </div>

                <div className="col-start-3 row-start-2 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[3]} />
                </div>

                <div className="col-start-4 row-start-2 col-span-1 row-span-1 cursor-pointer">
                    <img src={images[4]} className="rounded-br-xl" />
                </div>

            </div>
        }
    </div>
  )
}

export default RoomImageGrid