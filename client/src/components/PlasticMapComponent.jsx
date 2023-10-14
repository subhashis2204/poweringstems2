import SearchBox from "./SearchBox"
import { useEffect, useState } from "react"
import MapComponent from "./MapComponent"
import { db } from "../../firebase-config"
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore"

function generateCoordinates() {
  const getRandomCoordinate = (min, max) => {
    return Math.random() * (max - min) + min
  }

  const coordinates = []

  // latitude => 22.8015194
  // longitude => 86.2028753
  const maxLat = 22.79
  const minLat = 22.79
  const maxLng = 88.35
  const minLng = 88.33

  for (let i = 0; i < 100; i++) {
    const latitude = getRandomCoordinate(minLat, maxLat)
    const longitude = getRandomCoordinate(minLng, maxLng)
    coordinates.push({ latitude, longitude, type: "plastic" })
  }
  return coordinates
}

function PlasticMapComponent() {
  const [locations, setLocations] = useState([])
  // console.log(locations)

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const locationRef = collection(db, "locations")
    // adding geocoordinates here

    // const coordinates = generateCoordinates()

    // coordinates.forEach(async (docData) => {
    //   const docRef = await addDoc(locationRef, docData)
    //   console.log("Document written with ID: ", docRef.id)
    // })

    // ending it here

    const q = query(locationRef, where("type", "==", "plastic"))
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
        <div className="col-span-2">
          <SearchBox
            type="plastic"
            setLocations={setLocations}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
        </div>
      </div>
    </>
  )
}

export default PlasticMapComponent
