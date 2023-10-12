import { createContext, useState } from "react"
const AppContext = createContext()

import Cookies from "universal-cookie"
const cookies = new Cookies()

function Provider({ children }) {
  const [isAuth, setIsAuth] = useState(cookies.get("authorized"))
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export { Provider }
export default AppContext
