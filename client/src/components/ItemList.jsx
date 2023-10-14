import ItemsContext from "../context/items"
import { useContext, useEffect } from "react"
import Item from "./Item"
import FlashMessage from "react-flash-message"

function ItemList() {
  const { items, setItems, flag, setFlag } = useContext(ItemsContext)

  const renderedItems = items?.map((item) => {
    return <Item item={item} key={item.id} />
  })

  return (
    <>
      <div className="flex items-center justify-center pt-5">
        {flag && (
          <FlashMessage duration={3000} persistOnHover={true}>
            <p className="bg-green-600 text-white px-3 py-2 rounded-md">
              Purchase Successful
            </p>
          </FlashMessage>
        )}
      </div>
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
