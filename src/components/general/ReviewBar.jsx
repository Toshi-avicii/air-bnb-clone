/* eslint-disable react/prop-types */
function ReviewBar({ totalLength, coveredLength }) {
  
  return (
    <div className="bg-gray-400 h-[6px] rounded-lg w-[150px]">
        <div 
            className="bg-black h-[6px] rounded-lg"
            style={{
                width: `${(coveredLength / totalLength) * 100}%`
            }}    
        ></div>
    </div>
  )
}

export default ReviewBar