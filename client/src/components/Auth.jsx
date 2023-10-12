import { auth, googleProvider, db } from "../../firebase-config"
import { signInWithPopup } from "firebase/auth"
import Cookies from "universal-cookie"
import AppContext from "../context/AppContext"
import { useContext } from "react"
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore"

const cookies = new Cookies()

function Login() {
  const { setIsAuth, user, setUser } = useContext(AppContext)

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)

      const userRef = collection(db, "users")

      const userQuery = query(
        userRef,
        where("email", "==", auth.currentUser.email)
      )
      const userSnapshot = await getDocs(userQuery)

      if (userSnapshot.empty) {
        const docRef = await addDoc(userRef, {
          email: auth.currentUser.email,
          name: auth.currentUser.displayName,
          avatar: auth.currentUser.photoURL,
          points: 0,
        })

        cookies.set("user", docRef.id)
      } else {
        cookies.set("user", userSnapshot.docs[0].id)
      }

      cookies.set("authorized", true)
      setIsAuth(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
        onClick={signInWithGoogle}
      >
        Login
      </button>
    </>
  )
}

function Logout() {
  const { setIsAuth } = useContext(AppContext)

  const signOut = async () => {
    try {
      await auth.signOut()

      const cookies = new Cookies()

      cookies.remove("authorized")
      setIsAuth(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
        onClick={signOut}
      >
        Logout
      </button>
    </>
  )
}

export { Login, Logout }
