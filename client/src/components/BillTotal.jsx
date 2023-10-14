import { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import { auth, db } from "../../firebase-config"
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  limit,
} from "firebase/firestore"
import ItemsContext from "../context/items"

function BillTotal({ items }) {
  const { user } = useContext(AppContext)
  const { handleEmptyCart, setFlag, flag } = useContext(ItemsContext)
  const [processing, setProcessing] = useState(false)

  let totalAmount = 0

  const handlePurchaseOrder = async () => {
    setProcessing(true)
    const email = auth.currentUser.email

    // console.log(auth.currentUser.getIdToken())

    const userRef = collection(db, "users")
    const userQuery = query(userRef, where("email", "==", email), limit(1))
    const userSnapshot = await getDocs(userQuery)

    if (userSnapshot.empty) {
      console.log("No matching documents.")
      return
    }

    userSnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data())
    })

    const requiredUser = userSnapshot.docs[0]
    const uid = requiredUser.id
    const userDocRef = doc(db, "users", uid)
    await updateDoc(userDocRef, {
      points: requiredUser.data().points - totalAmount,
    })

    handleEmptyCart()
    setProcessing(false)
    setFlag(true)
  }

  if (items) {
    for (let item of items) {
      totalAmount += item.price * item.qty
    }
  }
  const content =
    totalAmount > user?.points ? (
      <div className="flex justify-start w-full">
        <p className="bg-red-600 text-white rounded-md px-3 py-2 text-lg font-poppins">
          You dont have enough points to make this purchase
        </p>
      </div>
    ) : (
      <div className="flex justify-between w-full">
        <p className="bg-green-600 text-white rounded-md px-3 py-2 text-lg font-poppins">
          You have enough points to make this purchase
        </p>
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md"
          onClick={handlePurchaseOrder}
        >
          Complete Purchase
        </button>
      </div>
    )
  return (
    <>
      <div className="flex items-center justify-between w-full font-poppins p-2 rounded-md">
        <p>Total</p>
        <p>{totalAmount}</p>
      </div>
      {user && (
        <div className="w-full px-2 flex justify-between text-red-600">
          <p>Available Points</p>
          <p>{user.points}</p>
        </div>
      )}
      {!processing && user && totalAmount > 0 && content}
      {processing && (
        <div className="flex justify-center w-full">
          <p className="bg-green-600 text-white px-3 py-2 rounded-md">
            Processing . . .
          </p>
        </div>
      )}
    </>
  )
}

export default BillTotal
