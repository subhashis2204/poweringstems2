import SearchBox from "./SearchBox"
import { useEffect, useState } from "react"
import MapComponent from "./MapComponent"
import { db } from "../../firebase-config"
import { render } from "react-dom"
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore"
import QueryBox from "./QueryBox"
import FlashMessage from "react-flash-message"

function AluminiumMapComponent() {
  const [locations, setLocations] = useState([])
  // console.log(locations)

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const locationRef = collection(db, "locations")

    const q = query(locationRef, where("type", "==", "aluminium"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const locations = []
      querySnapshot.forEach((doc) => {
        locations.push(doc.data())
      })
      setLocations(locations)
    })

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          setError(null)
        },
        (error) => {
          setError(error.message)
          setLatitude(null)
          setLongitude(null)
        }
      )
    } else {
      setError("Geolocation is not supported by this browser.")
    }

    return () => unsubscribe()
  }, [])

  console.log(latitude, longitude, error)

  const center = { latitude, longitude }

  return (
    <>
      <div className="grid grid-cols-5 mb-5">
        <div className="col-start-1 col-span-3">
          <MapComponent locations={locations} center={center} />
        </div>
        <div className="flex flex-col gap-8 col-span-2">
          <SearchBox
            type="plastic"
            setLocations={setLocations}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
          <QueryBox type="aluminium" />
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default AluminiumMapComponent
