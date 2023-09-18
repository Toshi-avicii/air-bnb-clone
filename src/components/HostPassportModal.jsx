import DialogModal from "./general/DialogModal"
import { GrClose } from "react-icons/gr"
import HostProfileBox from "./host-details/HostProfileBox";
import HostFeatures from "./host-details/HostFeatures";
import HostReviews from "./host-details/HostReviews";
import HostConfirmedInfo from "./host-details/HostConfirmedInfo";
import HostListings from "./host-details/HostListings";
import ReportHostBtn from "./host-details/ReportHostBtn";

function HostPassportModal({ isOpen, setOpenHostPassportModal, closeModal, hostDetails }) {
  return (
    <DialogModal isOpen={isOpen} closeModal={closeModal}>
        <div>
            <div className="p-6 bg-neutral-200">
                <div className="sticky border-b-2 border-gray-200 w-full">
                    <button onClick={closeModal}>
                        <GrClose />
                    </button> 
                </div>
                {
                    hostDetails &&
                    <HostProfileBox hostDetails={hostDetails} />
                }

                {
                    hostDetails && 
                    <HostFeatures hostDetails={hostDetails} />
                }

                
            </div>
            {
                hostDetails &&
                <div className="bg-white p-6">
                    {/* host reviews section */}
                    <HostReviews hostDetails={hostDetails} />

                    <hr className="w-full bg-slate-300 h-[3px]" />

                    {/* host's confirmed information */}
                    <HostConfirmedInfo name={hostDetails.name} info={hostDetails.info} />

                    {/* host's listings */}
                    <HostListings name={hostDetails.name} listings={hostDetails.listings} />

                    <hr className="w-full bg-slate-300 h-[3px]" />
                </div>
            }
            <ReportHostBtn />

        </div>
    </DialogModal>
  )
}

export default HostPassportModal