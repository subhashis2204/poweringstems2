import ItemsContext from "../context/items"
import { useContext } from "react"

function CartItem({ item }) {
  const { handleRemoveAllItems } = useContext(ItemsContext)

  const handleDeleteClick = () => {
    handleRemoveAllItems(item.id)
  }

  return (
    <>
      <div className="flex items-center justify-between w-4/5 min-w-[25rem] p-2 rounded-md font-poppins capitalize bg-amber-100 shadow-lg">
        <img
          src={`https://picsum.photos/seed/${item.id}/300/200`}
          alt=""
          className="h-12 rounded-md"
        />
        <div className="flex grow items-center justify-between gap-4 px-3">
          <p className="font-bold">{item.name}</p>
          <p>
            {item.qty} x {item.price}
          </p>
        </div>
        <button
          className="aspect-square w-8 text-red-500 hover:bg-amber-200 hover:rounded-full flex items-center justify-center"
          onClick={handleDeleteClick}
        >
          &#128465;
        </button>
      </div>
    </>
  )
}

export default CartItem
