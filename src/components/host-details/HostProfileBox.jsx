import { AiFillStar } from "react-icons/ai"

function HostProfileBox({
    hostDetails
}) {
    return (
        <div className="rounded-xl bg-white shadow-lg flex justify-between items-center my-4 p-6 space-x-2">
            <div className="flex flex-col justify-center items-center flex-1 min-h-full py-2">
                <img src={hostDetails?.profilePic} className="rounded-full w-[110px] h-[110px] mb-2" />
                <h2 className="text-3xl font-bold">{hostDetails?.name}</h2>
                <p className="text-lg font-bold mt-2">Host</p>
            </div>
            <div className="flex-1">
                <div className="border-b-2 border-gray-300">
                    <h2 className="text-3xl font-bold mb-2">{hostDetails?.reviews?.length}</h2>
                    <p className="text-sm font-bold mb-2">Reviews</p>
                </div>

                <div className="border-b-2 border-gray-300 mt-2">
                    <h2 className="text-3xl font-bold mb-2 flex space-x-2 items-center">
                        <span>{hostDetails?.hostRating}</span>
                        <AiFillStar className="text-2xl" />
                    </h2>
                    <p className="text-sm font-bold mb-2">Rating</p>
                </div>

                <div className="border-b-2 border-gray-300 mt-2">
                    <h2 className="text-3xl font-bold mb-2">{hostDetails?.yearsHosting}</h2>
                    <p className="text-sm font-bold mb-2">Years Hosting</p>
                </div>
            </div>
        </div>
    )
}

export default HostProfileBox