import { useEffect, useState } from "react";
import locations from "../mockData/locationData";

function useGetLocationByRoomId(roomId) {
    const [room, setRoom] = useState({});
    useEffect(() => {
        const foundedRoom = locations.find((location) => {
            return location.id === roomId;
        });
        setRoom(foundedRoom);
    }, [roomId]);

    return room;
}

export default useGetLocationByRoomId;