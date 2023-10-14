import { Outlet, NavLink } from "react-router-dom"
import HeroComponent from "../components/HeroComponent"
import RecycleItems from "../components/RecycleItems"

function MapsPage() {
  return (
    <>
      <HeroComponent />
      <RecycleItems />
      <nav>
        <div className="border-2 border-purple-500 flex max-w-min p-2 gap-4 rounded-full mx-auto mt-12 mb-4">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${isActive ? "bg-purple-200" : ""} py-1 px-5 rounded-full`
            }}
          >
            Plastic
          </NavLink>
          <NavLink
            to="/aluminum"
            className={({ isActive }) => {
              return `${isActive ? "bg-purple-200" : ""} py-1 px-5 rounded-full`
            }}
          >
            Aluminium
          </NavLink>
          <NavLink
            to="/paper"
            className={({ isActive }) => {
              return `${isActive ? "bg-purple-200" : ""} py-1 px-5 rounded-full`
            }}
          >
            Paper
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default MapsPage
