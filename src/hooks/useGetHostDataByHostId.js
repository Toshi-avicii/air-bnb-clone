import { useEffect, useState } from "react";
import hosts from "../mockData/hostData";

function useGetHostDataByHostId(hostId) {
    const [hostData, setHostData] = useState({});

    useEffect(() => {
        const host = hosts.find((host) => {
            return host.id === hostId;
        });

        setHostData(host);
    }, [hostId])

    return hostData;
}

export default useGetHostDataByHostId;