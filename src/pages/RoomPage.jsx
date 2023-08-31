import { useParams } from "react-router-dom"
import useGetLocationByRoomId from "../hooks/useGetLocationByRoomId";
import { useEffect } from "react";
import RoomHeader from "../components/roomPageComponents/RoomHeader";
import useGetHostDataByRoomId from "../hooks/useGetHostDataByRoomId";
import RoomImageGrid from "../components/roomPageComponents/RoomImageGrid";
import RoomInfo from "../components/roomPageComponents/RoomInfo";
import RoomReservation from "../components/roomPageComponents/RoomReservation";
import { AiFillFlag } from 'react-icons/ai';


function RoomPage() {
  const { roomId } = useParams();
  const room = useGetLocationByRoomId(roomId);
  const host = useGetHostDataByRoomId(roomId);

  useEffect(() => {
    console.log(room);
    console.log(host);
  }, [room, host]);

  return (
    <div className="flex justify-center items-center">
      <div className="p-6 sm:w-full md:w-full lg:w-full xl:w-[90%] ">
          {
              room &&
              <>
                <RoomHeader 
                    title={room.title}
                    rating={room.rating}
                    noOfReviews={host ? host?.reviews?.length : null}
                    isSuperHost={room.superhost}
                    address={room.mainAddress}
                    roomId={room.id}
                    firstImage={room.images ? room?.images[0] : null}
                    stay={room.stay}
                    category={room.category}
                    stayDate={room.stayDate}
                    roomOwner={host?.profilePic}
                    price={room.pricePerNight}
                />

                <RoomImageGrid images={room.images ? room.images : []} />

                <div className="flex justify-between items-start space-x-4">
                  <div className="flex-[3]">
                    <RoomInfo 
                      hostName={host ? host.name : null}
                      hostProfilePic={host ? host.profilePic : null}
                      beds={room?.beds}
                      privateBath={room?.amenities?.privateBath}
                      wifi={room?.amenities?.wifi}
                    />
                  </div>
                  <div className="flex-[2] flex justify-end items-end sticky top-4 flex-col">
                    <RoomReservation 
                      price={room?.pricePerNight}
                      rating={room?.rating}
                      noOfReviews={host ? host?.reviews?.length : null}
                    />

                    <div className="flex space-x-4 items-center self-center mt-4">
                      <AiFillFlag className="text-xl text-zinc-500" />
                      <span className="underline font-semibold text-zinc-500">Report this listing</span>
                    </div>
                  </div>
                </div>
              </>
          }
      </div>
    </div>
  )
}

export default RoomPage