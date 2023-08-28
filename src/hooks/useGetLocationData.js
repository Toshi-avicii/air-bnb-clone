import { useEffect, useState } from "react";
import locations from "../mockData/locationData";

function useGetLocationData(category) {
    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        const returnedLocationData = locations.filter((location) => {
            return location.category === category;
        });

        setLocationData(returnedLocationData);
    }, [category]);

    const avPrice = locationData.reduce((accumulator, currentValue) => {
        return Math.round(accumulator + currentValue.pricePerNight / locationData.length);
    }, 0);

    const prices = locationData.map((location) => {
        return location.pricePerNight;
    })

    const highestPrice = Math.max.apply(null, prices);

    return [locationData, avPrice, highestPrice];
}

export default useGetLocationData;