import { AiFillFlag } from "react-icons/ai"

function ReportHostBtn() {
  return (
    <div className="pb-4 px-6 flex space-x-2 items-center">
        <AiFillFlag className="text-lg" />
        <button className="underline text-lg font-semibold cursor-pointer">Report this profile</button>                
    </div>
  )
}

export default ReportHostBtn