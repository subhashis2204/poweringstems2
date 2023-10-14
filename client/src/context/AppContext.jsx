import { createContext, useState } from "react"
const AppContext = createContext()
import { db } from "../../firebase-config"
import { collection, onSnapshot, query, where } from "firebase/firestore"

import Cookies from "universal-cookie"
const cookies = new Cookies()

function Provider({ children }) {
  const [isAuth, setIsAuth] = useState(cookies.get("authorized"))
  const [user, setUser] = useState(null)

  if (user) {
    const userRef = collection(db, "users")
    const userQuery = query(userRef, where("email", "==", user.email))
    onSnapshot(userQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    })
  }

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export { Provider }
export default AppContext
