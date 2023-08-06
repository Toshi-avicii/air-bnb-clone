import ToggleSwitch from "./general/ToggleSwitch"

function DisplayBar() {
  return (
    <div className="flex justify-center items-center my-6">
        <div className="ring-1 ring-gray-200 py-4 px-5 flex items-center rounded-lg">
            <div className="pr-3 flex items-center border-r-2 border-gray-300 min-h-[36px]">
                <p className="leading-6 font-semibold text-lg">Display total price</p>
            </div>

            <div className="px-3 min-w-[350px]">
                <p className="text-gray-400 text-lg">Include all fees, before taxes</p>
            </div>
            <ToggleSwitch />
        </div>
    </div>
  )
}

export default DisplayBar