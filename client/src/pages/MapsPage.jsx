import { Routes, Route, Link, Outlet } from "react-router-dom"
import PlasticMapComponent from "../components/PlasticMapComponent"
import AluminiumMapComponent from "../components/AluminiumMapComponent"
import PaperMapComponent from "../components/PaperMapComponent"
import HeroComponent from "../components/HeroComponent"

function MapsPage() {
  return (
    <>
      <HeroComponent />
      <nav>
        <ul>
          <li>
            <Link to="/">Plastic</Link>
          </li>
          <li>
            <Link to="/aluminum">Aluminum</Link>
          </li>
          <li>
            <Link to="/paper">Paper</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default MapsPage
