import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MapComponent from "./components/MapComponent"
import StorePage from "./pages/StorePage"
import MapsPage from "./pages/MapsPage"
import { Routes, Route } from "react-router-dom"
import AluminiumMapComponent from "./components/AluminiumMapComponent"
import PaperMapComponent from "./components/PaperMapComponent"
import PlasticMapComponent from "./components/PlasticMapComponent"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MapsPage />}>
          <Route index element={<PlasticMapComponent />} />
          <Route path="/paper" element={<PaperMapComponent />} />
          <Route path="/aluminum" element={<AluminiumMapComponent />} />
        </Route>
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </>
  )
}

export default App
