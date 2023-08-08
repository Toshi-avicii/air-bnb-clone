import Filter from "./Filter"
import Tabs from "./Tabs"

function TabBar() {
  return (
    <div className="flex items-stretch px-4 sticky top-[97px] z-[2] bg-white">
        <Tabs />
        <Filter />
    </div>
  )
}

export default TabBar