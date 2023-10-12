import { useContext, useEffect } from "react"
import AppContext from "../context/AppContext"
import { Link } from "react-router-dom"
import icons from "../assets/icon.png"
import { Login, Logout } from "./Auth"
import Cookies from "universal-cookie"
import { db } from "../../firebase-config"
import { getDoc, doc } from "firebase/firestore"

const cookies = new Cookies()
function Navbar() {
  const { isAuth, user, setUser } = useContext(AppContext)

  useEffect(() => {
    const getUser = async () => {
      const userDocRef = doc(db, "users", cookies.get("user"))
      const userDoc = await getDoc(userDocRef)
      setUser(userDoc.data())
      console.log(userDoc.data())
    }
    isAuth ? getUser() : setUser(null)
  }, [isAuth, setUser])

  const content = isAuth ? <Logout /> : <Login />
  return (
    <div className="flex justify-between items-center p-5 md:px-16 mx-auto bg-purple-200">
      <div className="text-2xl">Demo Text</div>
      <div className="flex gap-8 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
      </div>
      <div className="mr-5 flex items-center gap-8">
        {" "}
        {isAuth && (
          <div className="flex items-center gap-2">
            <img src={icons} alt="" className="w-4" />
            {user?.points}
          </div>
        )}
        {content}
      </div>
    </div>
  )
}

export default Navbar
