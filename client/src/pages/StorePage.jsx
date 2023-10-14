import Item from "../components/Item"
import ItemList from "../components/ItemList"
import { ItemsProvider } from "../context/items"
import Cart from "../components/Cart"
import Bill from "../components/Bill"

function StorePage() {
  return (
    <>
      <ItemsProvider>
        <ItemList />
        <div className="flex items-start justify-center">
          <Cart />
          <Bill />
        </div>
      </ItemsProvider>
    </>
  )
}

export default StorePage
