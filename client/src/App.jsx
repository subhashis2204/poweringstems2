import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MapComponent from "./components/MapComponent"
import StorePage from "./pages/StorePage"
import MapsPage from "./pages/MapsPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MapsPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </>
  )
}

export default App
