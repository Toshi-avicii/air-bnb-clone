import { useParams } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import useGetHostDataByHostId from "../hooks/useGetHostDataByHostId";
import HostProfileBox from "../components/host-details/HostProfileBox";
import HostConfirmedInfo from '../components/host-details/HostConfirmedInfo';
import ReportHostBtn from '../components/host-details/ReportHostBtn';
import HostFeatures from "../components/host-details/HostFeatures";
import HostReviews from '../components/host-details/HostReviews';
import HostListings from '../components/host-details/HostListings';
import Footer from '../components/Footer';

function HostProfilePage() {
    const { hostId } = useParams();
    const hostDetails = useGetHostDataByHostId(hostId);

    return (
        <>
            <Navbar isSticky={true} />
            <div className="flex justify-center items-center">
                <div className="p-6 sm:w-full md:w-full lg:w-full xl:w-[90%]">
                    <div className="flex">
                        <div className="flex-[3] p-4">
                            {
                                hostDetails &&
                                <div>
                                    <HostProfileBox hostDetails={hostDetails} />
                                    <div className="rounded-lg p-4 border border-gray-300 my-8">
                                        <HostConfirmedInfo name={hostDetails.name} info={hostDetails.info} />
                                    </div>
                                    <ReportHostBtn />
                                </div>
                            }
                        </div>
                        <div className="flex-[8] ml-8 p-4 flex flex-col">
                            <h1 className="text-3xl mb-4 font-bold">About Me</h1>
                            {
                                hostDetails &&
                                <div className="overflow-x-hidden">
                                    <HostFeatures hostDetails={hostDetails} grid={true} />
                                    <p className='my-8'>
                                        I am a journalist and actor, and in May 2019 I created
                                        the vegan brand BENECAO Brasil, with an artisanal factory,
                                        store, restaurant and energizing spa. I live in the
                                        same house, where I have three bedrooms for
                                        hosting. Would you like to be in a vegan place with
                                        natural products, tasty food, and an energy proposal?
                                        Welcome.
                                    </p>

                                    <hr className="bg-gray-300 h-[2px] my-6" />

                                    <div className="max-w-4xl">
                                        <HostReviews hostDetails={hostDetails} slidesOnView={true} />
                                    </div>

                                    <hr className="bg-gray-300 h-[2px] my-6" />

                                    <div className="max-w-4xl">
                                        <HostListings 
                                            name={hostDetails.name} 
                                            listings={hostDetails.listings} 
                                            imageHeight={250}
                                            imageWidth={250}
                                        />
                                    </div>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HostProfilePage