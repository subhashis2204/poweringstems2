import ItemsContext from "../context/items"
import { useContext, useEffect } from "react"
import Item from "./Item"

function ItemList() {
  const { items, setItems } = useContext(ItemsContext)

  const renderedItems = items?.map((item) => {
    return <Item item={item} key={item.id} />
  })

  return (
    <>
      <p className="text-center font-poppins text-xl font-bold py-5">
        Pick Your Items
      </p>
      <div className="flex gap-2 items-center justify-center pb-2 flex-wrap">
        {renderedItems}
      </div>
    </>
  )
}

export default ItemList
