import { useCallback, useEffect, useState } from "react";
import locations from "../mockData/locationData"
import LocationCardSlider from './LocationCardSlider'
import SkeletonLocationCard from "./skeletons/SkeletonLocationCard"
import { useSearchParams } from 'react-router-dom';

function Locations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectLocation = useCallback(() => {
    function filterLocations () {
        const selectedCategory = searchParams.get('category');
        const filteredLocations = locations.filter((location) => {
            if(!selectedCategory) {
                return location.category === 'amazing_views';
            }
            return location.category === selectedCategory;
        });
  
        return filteredLocations;
    }

    return filterLocations();
  }, [searchParams]);
  const [selectedLocations, setSelectedLocations] = useState(handleSelectLocation());


  useEffect(() => {
    setSelectedLocations(handleSelectLocation());
  }, [handleSelectLocation]);

  console.log(selectedLocations);


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
                            price={location.price || location.pricePerNight}
                            rating={location.rating}
                            stayDate={location.stayDate}
                            roomOwner={location.roomOwner ? location.roomOwner : null}
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