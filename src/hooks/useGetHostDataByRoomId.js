import { useEffect, useState } from "react";
import hosts from "../mockData/hostData";

function useGetHostDataByRoomId(roomId) {
    const [hostData, setHostData] = useState({});

    useEffect(() => {
        const host = hosts.find((host) => {
            const foundedListing = host.listings.find((listing) => {
                return listing.id === roomId;
            });

            if(foundedListing) {
                return host;
            }
        });

        setHostData(host);
    }, [roomId])

    return hostData;
}

export default useGetHostDataByRoomId;