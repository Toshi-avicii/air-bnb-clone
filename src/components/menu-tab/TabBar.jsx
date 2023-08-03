import Filter from "./Filter"
import Tabs from "./Tabs"

function TabBar() {
  return (
    <div className="flex items-stretch px-4">
        <Tabs />
        <Filter />
    </div>
  )
}

export default TabBar