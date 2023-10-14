import { useContext } from "react"
import ItemQuantity from "./ItemQty"
import ItemsContext from "../context/items"

function Item({ item }) {
  const { handleAddItem } = useContext(ItemsContext)

  const handleAddItemClick = () => {
    handleAddItem(item.id)
  }

  let content = (
    <>
      <button
        className="bg-orange-500 text-white text-lg font-medium font-poppins w-full px-3 py-2 rounded-md p-2"
        onClick={handleAddItemClick}
      >
        Add to Cart
      </button>
    </>
  )

  if (item.qty > 0) {
    content = <ItemQuantity item={item} />
  }

  return (
    <>
      <div className="max-w-[15rem] flex flex-col items-center justify-center p-2 bg-amber-100 shadow-xl rounded-md gap-4">
        <img
          src={`https://picsum.photos/seed/${item.id}/300/200`}
          alt=""
          className="rounded-md"
        />
        <div className="flex items-center justify-between w-full px-1">
          <p className="font-poppins font-bold capitalize">{item.name}</p>
          <p className="font-poppins bg-purple-600 text-white px-2 py-1 rounded-md">
            {" "}
            {item.price} credits
          </p>
        </div>
        {content}
      </div>
    </>
  )
}

export default Item
