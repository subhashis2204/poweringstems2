import { useContext } from "react"
import ItemsContext from "../context/items"

function ItemQuantity({ item }) {
  const { handleAddItem, handleRemoveItem } = useContext(ItemsContext)

  const handleAddClick = () => {
    handleAddItem(item.id)
  }
  const handleMinusClick = () => {
    handleRemoveItem(item.id)
  }

  return (
    <>
      <div className="flex justify-between items-center w-full font-poppins">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
          onClick={handleAddClick}
        >
          +
        </button>
        <span className="text-gray-800 font-bold text-lg">{item.qty}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
          onClick={handleMinusClick}
        >
          -
        </button>
      </div>
    </>
  )
}

export default ItemQuantity
