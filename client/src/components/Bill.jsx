import BillTotal from "./BillTotal"
import BillItems from "./BillItems"
import ItemsContext from "../context/items"
import { useContext } from "react"
import AppContext from "../context/AppContext"

function Bill() {
  const { items } = useContext(ItemsContext)
  const { user } = useContext(AppContext)

  const requiredItems = items?.filter((item) => {
    return item.qty > 0
  })

  const renderedItems = requiredItems?.map((item) => {
    return <BillItems item={item} key={item.id} />
  })

  // const total = requiredItems?.reduce((acc, item) => {
  //   return acc + item.qty * item.price
  // }, 0)
  // let totalAmount = 0
  // if (requiredItems) {
  //   for (let item of items) {
  //     totalAmount += item.price * item.qty
  //   }
  //   console.log(totalAmount)
  // }

  return (
    <>
      <div className="w-1/2 p-4 m-5 flex flex-col items-center justify-start gap-4">
        <p className="font-poppins text-xl font-bold">Checkout</p>
        <div className="w-full mt-2 flex flex-col items-center justify-between gap-4 pb-4 border-b-2">
          {renderedItems}
        </div>
        <BillTotal items={items} />
      </div>
    </>
  )
}

export default Bill
