/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import useGetLocationByRoomId from "../hooks/useGetLocationByRoomId";
import { useEffect, useState } from "react";
import RoomHeader from "../components/roomPageComponents/RoomHeader";
import useGetHostDataByRoomId from "../hooks/useGetHostDataByRoomId";
import RoomImageGrid from "../components/roomPageComponents/RoomImageGrid";
import RoomInfo from "../components/roomPageComponents/RoomInfo";
import RoomReservation from "../components/roomPageComponents/RoomReservation";
import { AiFillFlag, AiOutlineWifi } from 'react-icons/ai';
import { LuFan } from 'react-icons/lu';
import { MdOutlineBathtub, MdOutlineKitchen } from 'react-icons/md'
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import RoomHostInfo from "../components/roomPageComponents/RoomHostInfo";
import DayPickerComponent from "../components/roomPageComponents/DayPickerComponent";
import RoomReviews from "../components/roomPageComponents/RoomReviews";
import RoomRules from "../components/roomPageComponents/RoomRules";
import Footer from "../components/Footer";
import Navbar from '../components/navbar/Navbar';
import RoomNavbar from "../components/roomPageComponents/RoomNavbar";

function RoomPage() {
  const { roomId } = useParams();
  const room = useGetLocationByRoomId(roomId);
  const host = useGetHostDataByRoomId(roomId);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const css = `
    .my-selected:not([disabled]) { 
      font-weight: bold; 
      background-color: black;
      color: white; 
    }
    .my-selected:hover:not([disabled]) { 
      color: white;
      background-color: black;
    }
    .my-today { 
      font-weight: semibold;
      font-size: 110%; 
      color: white;
      background-color: black;
    }
  `;

  useEffect(() => {
    console.log(room);
    console.log(host);
  }, [room, host]);

  useEffect(() => {
    function handleWindowScroll() {
      setScrollPosition(window.scrollY);
    }

    function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if(rect.top <= -350) {
        setIsBoxVisible(true);
      } else {
        setIsBoxVisible(false);
      }
  
      // Check if the element is fully visible in the viewport
      return (
          rect.top >= 0 ||
          rect.bottom <= windowHeight
      );
    }
  
    // Get the element you want to check
    const elementToCheck = document.getElementById('room-info');

    function handleScroll() {
      if (isElementVisible(elementToCheck)) {
          console.log('Element is visible in the viewport.');
          if((window.innerWidth > 350 && window.innerWidth < 768) && scrollPosition >= 150) {
            setIsVisible(true);
          } else if((window.innerWidth > 768 && window.innerWidth < 992) && scrollPosition >= 300) {
            setIsVisible(true);
          } else if((window.innerWidth > 992 && window.innerWidth < 1300) && scrollPosition >= 450) {
            setIsVisible(true);
          } else if(window.innerWidth > 1300 && scrollPosition >= 500) {
            setIsVisible(true);
          } else {
            console.log('this is running')
            setIsVisible(false);
          }
      } else {
          console.log('Element is not visible in the viewport.');
          setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleWindowScroll);
    }
  }, [scrollPosition]); 

  return (
    <>
    <Navbar isSticky={false} />
    {
      isVisible && 
      <RoomNavbar 
        isBoxVisible={isBoxVisible}
        price={room?.pricePerNight}
        rating={room?.rating}
        reviews={room?.reviews}
      />
    }
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

                <RoomImageGrid images={room.images ? room.images : []} roomId={room.id ? room.id : null} />

                <div className="flex justify-between items-start space-x-4">
                  <div className="flex-[3]">
                    <RoomInfo 
                      hostName={host ? host.name : null}
                      hostProfilePic={host ? host.profilePic : null}
                      beds={room?.beds}
                      privateBath={room?.amenities?.privateBath}
                      wifi={room?.amenities?.wifi}
                    />

                    <h1 className="my-5 text-3xl font-semibold">Meet your Host</h1>
                    <RoomHostInfo host={host ? host : null} />

                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold my-3">About this place</h2>
                      <p>
                        Stay in a vegan home, where we have artisanal factory, shop, restaurant,
                        spa and lodging. The room is large, with a new soft single bed, comfortable
                        sofa, table and chair. There&apos;s a shared minibar in the hallway.
                        The neighbourhood is one of the liveliest in town. The subway is very close.
                        The company operates from 11am to 7pm, monday to saturday. In the same place,
                        Eloy lives in another room. How about feeding yourself, doing a spa and
                        climbing up to rest in your bed, taking a few steps?...
                      </p>

                      <button className="my-3 underline font-semibold">
                        <span>Show more</span>
                      </button>

                    </div>

                    <hr className="bg-gray-300 h-[2px] my-6" />

                    <div className="my-4">
                      <h2 className="text-2xl font-semibold my-3">Where you&apos;ll sleep</h2>
                      <div className="flex space-x-4">
                        <div className="flex flex-col flex-1">
                          <img src={room?.images && room?.images[0]} className="rounded-lg w-full h-[200px] " />
                          <p className="my-3 font-semibold text-lg">Bedroom</p>
                          <p className="font-semibold text-lg text-zinc-600">
                            {
                              room?.beds === 1 ? '1 single bed' : `${room?.beds} beds`
                            }
                          </p>
                        </div>

                        <div className="flex flex-col flex-1">
                          <img src={room?.images && room?.images[0]} className="rounded-lg w-full h-[200px]" />
                          <p className="my-3 font-semibold text-lg">Living Room</p>
                          <p className="font-semibold text-lg text-zinc-600">
                            {
                              room?.beds === 1 ? '1 single bed' : `${room?.beds} beds`
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr className="bg-gray-300 h-[2px] my-6" />

                    <div id="amenities">
                      <h2 className="text-2xl font-semibold my-3">What this place offers</h2>

                      <div className="grid grid-cols-2 grid-rows-3 gap-4">
                          <div className="flex space-x-4 items-center">
                            <AiOutlineWifi className="text-lg" />
                            {
                              room?.amenities?.wifi ?
                              <p>High speed wifi</p> : 
                              <del>High speed wifi</del>
                            }
                          </div>

                          <div className="flex space-x-4 items-center w-full">
                            <LuFan className="text-xl" />
                            {
                              room?.amenities?.airConditioning ?
                              <p>Air conditioner available</p> : 
                              <del>Air conditioner available</del>
                            }
                          </div>

                          <div className="flex space-x-4 items-center w-full">
                            <MdOutlineKitchen className="text-xl" />
                            {
                              room?.amenities?.kitchen ?
                              <p>A separate kitchen available</p> : 
                              <del>A separate kitchen available</del>
                            }
                          </div>

                          <div className="flex space-x-4 items-center w-full">
                            <MdOutlineBathtub className="text-xl" />
                            {
                              room?.amenities?.privateBath ?
                              <p>Private bathroom available</p> : 
                              <del>Private bathroom available</del>
                            }
                          </div>

                          <div className="flex space-x-4 items-center w-full">
                            <CgSmartHomeWashMachine className="text-xl" />
                            {
                              room?.amenities?.washer ?
                              <p>Paid dryer - in unit</p> : 
                              <del>Paid dryer - in unit</del>
                            }
                          </div>
                      </div>

                      <div className="mt-8 mb-4 w-[25%]">
                        <button className="black-outline-btn p-3 font-semibold text-lg">Show all amenities</button>
                      </div>

                    </div>
                    <div className="my-6">
                      <style>{css}</style>
                      <DayPickerComponent 
                        modifiersClassNames={{
                          selected: "my-selected",
                          today: "my-today"
                        }}
                        modifiersStyles={{
                          disabled: { fontSize: "85%" }
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-[2] flex justify-end items-end sticky top-36 flex-col" id="room-info">
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

                <hr className="bg-gray-300 h-[2px] my-6" />

                <RoomReviews roomReviews={room?.reviews} />

                <hr className="bg-gray-300 h-[2px] my-6" />

                <RoomRules />
              </>
          }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default RoomPage