import { createContext, useState, useEffect } from "react"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const ItemsContext = createContext()

function ItemsProvider({ children }) {
  const [items, setItems] = useState(cookies.get("items") || [])
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const requiredItems = cookies.get("items")
    if (requiredItems) {
      setItems(requiredItems)
    } else {
      setItems([
        { id: 1, name: "carrot", price: 2, qty: 0 },
        { id: 2, name: "brinjal", price: 3, qty: 0 },
        { id: 3, name: "cucumber", price: 4, qty: 0 },
        { id: 4, name: "strawberry", price: 2, qty: 0 },
        { id: 5, name: "watermelon", price: 5, qty: 0 },
        { id: 6, name: "apple", price: 10, qty: 0 },
      ])
    }
  }, [])

  const handleAddItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const currentQuantity = item.qty + 1
        return { ...item, qty: currentQuantity }
      }

      setFlag(false)
      return item
    })

    cookies.set("items", updatedItems)
    setItems(updatedItems)
  }

  const handleRemoveItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.qty) {
        const currentQuantity = item.qty - 1
        return { ...item, qty: currentQuantity }
      }

      return item
    })

    cookies.set("items", updatedItems)
    setItems(updatedItems)
  }

  const handleRemoveAllItems = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: 0 }
      }
      return item
    })

    cookies.set("items", updatedItems)
    setItems(updatedItems)
  }

  const handleEmptyCart = () => {
    const updatedItems = items.map((item) => {
      return { ...item, qty: 0 }
    })

    cookies.set("items", updatedItems)
    setItems(updatedItems)
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        flag,
        setFlag,
        setItems,
        handleAddItem,
        handleRemoveAllItems,
        handleRemoveItem,
        handleEmptyCart,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContext
export { ItemsProvider }
