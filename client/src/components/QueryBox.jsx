import { useRef } from "react"

import { auth, db } from "../../firebase-config"
import {
  doc,
  where,
  getDocs,
  query,
  collection,
  limit,
  updateDoc,
} from "firebase/firestore"

function QueryBox({ type }) {
  const ref = useRef()
  let content = ""
  if (type === "glass") content = "How many bottles recycled today"
  else if (type === "paper") content = "How much paper(in Kgs) recycled today"
  else if (type === "aluminium") content = "How many cans recycled today"

  const handleSubmit = async () => {
    const contribution = Number(ref.current.value)
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
      points: contribution + requiredUser.data().points,
    })

    // console.log(userSnapshot.data())

    // const document = doc(db, "users", uid)

    // const docSnap = await getDoc(document)
    // console.log(docSnap)

    console.log(email)
  }

  return (
    <>
      <div className="px-12 flex flex-col gap-4">
        <p className="text-md font-bold">{content}</p>
        <div className="flex gap-2">
          <input
            type="number"
            ref={ref}
            className="rounded-md bg-gray-100 border-2 border-gray-300 focus:ring-black focus:border-black p-2 grow"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-3 py-3 rounded-md text-sm text-white  md:col-start-1 md:col-span-2 hover:shadow-lg min-w-max"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default QueryBox
