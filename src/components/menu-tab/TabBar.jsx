import Filter from "./Filter"
import Tabs from "./Tabs"

function TabBar() {
  return (
    <div className="flex items-stretch px-2 md:px-4 sticky top-[84px] md:top-[97px] z-[15] bg-white">
        <Tabs />
        <Filter />
    </div>
  )
}

export default TabBar