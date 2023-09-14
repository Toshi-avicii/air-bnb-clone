import LocationCardSlider from './LocationCardSlider'
import SkeletonLocationCard from "./skeletons/SkeletonLocationCard"
import useGetSelectedLocationData from "../hooks/useGetSelectedLocationData";
import hosts from '../mockData/hostData';

function Locations() {
  const selectedLocations = useGetSelectedLocationData();
  console.log(hosts[0]);

  return (
    <div className="px-8 my-6">
        <div className="grid grid-cols-4 place-items-start gap-5">
            {
                selectedLocations.length > 0 ?
                selectedLocations.map((location) => {
                    return (
                        <LocationCardSlider 
                            sliderId={location.id}
                            category={location.category}
                            images={location.images}
                            mainAddress={location.mainAddress}
                            secondaryAddress={location.secondaryAddress || location.stay}
                            price={location.pricePerNight}
                            rating={location.rating}
                            stayDate={location.stayDate}
                            roomOwner={
                                hosts.filter((host) => {
                                    const foundedRoom = host.listings.some((listing) => {
                                        return listing.id === location.id
                                    })

                                    if(foundedRoom) return host.profilePic;
                                  })
                            }
                            key={location.id}
                        />
                    )
                }) : new Array(12).fill(' ').map((_, index) => {
                    return (
                        <SkeletonLocationCard key={index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Locations