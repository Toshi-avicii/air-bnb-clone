import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import locations from "../mockData/locationData";

function useGetSelectedLocationData() {
  const [searchParams] = useSearchParams();
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

  return selectedLocations;
}

export default useGetSelectedLocationData;