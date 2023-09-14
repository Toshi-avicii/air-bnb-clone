import { AiOutlineCheck } from "react-icons/ai"

function HostConfirmedInfo({ name, info }) {
    return (
        <div className="mt-6">
            <h2 className="font-bold text-2xl">{name}&apos;s confirmed information</h2>

            <div className="my-4">
                <div className="flex space-x-3 items-center">
                    <AiOutlineCheck className="text-2xl" />
                    {
                        info?.email && <span className="font-semibold text-xl">Identity</span>
                    }
                </div>

                <div className="flex space-x-3 items-center my-4">
                    <AiOutlineCheck className="text-2xl" />
                    {
                        info?.email && <span className="font-semibold text-xl">Email address</span>
                    }
                </div>

                <div className="flex space-x-3 items-center">
                    <AiOutlineCheck className="text-2xl" />
                    {
                        info?.phone && <span className="font-semibold text-xl">Phone number</span>
                    }
                </div>

                <p className="underline text-lg my-6 font-semibold cursor-pointer">Learn about identity verification</p>
            </div>
        </div>
    )
}

export default HostConfirmedInfo