import CartItem from "./CartItem"
import ItemsContext from "../context/items"
import { useContext } from "react"

function Cart() {
  const { items } = useContext(ItemsContext)

  const requiredItems = items?.filter((item) => {
    return item.qty > 0
  })

  const renderedItems = requiredItems?.map((item) => {
    return <CartItem item={item} key={item.id} />
  })

  return (
    <>
      <div className="w-1/2 px-12 py-8 flex flex-col items-center justify-center gap-4">
        <p className="font-poppins text-xl font-bold">Your Items in Cart</p>
        <div className="flex flex-col items-center gap-4 w-full px-5 mt-3 border-r-2 border-black">
          {renderedItems}
        </div>
      </div>
    </>
  )
}

export default Cart
