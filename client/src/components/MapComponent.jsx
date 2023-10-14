import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { db } from "../../firebase-config"
import { addDoc, collection } from "firebase/firestore"

function MapComponent({ locations, center }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVniXgo3FK0CBN8vZ4ds3CfIdFhqbJkk0",
  })

  if (!isLoaded) return <div>Loading...</div>
  const blueMarkerIcon = {
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: "blue", // Custom color (red in this case)
    fillOpacity: 1,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
    scale: 10,
  }

  const handleMapClick = (event) => {
    const lat = event.latLng.lat()
    const lng = event.latLng.lng()
    console.log(lat, lng)

    const locationRef = collection(db, "locations")
    const docData = {
      type: "paper",
      latitude: lat,
      longitude: lng,
    }
    addDoc(locationRef, docData)
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "70vh",
          margin: "10px 0 0 10px",
        }}
        zoom={16}
        center={{ lat: center.latitude, lng: center.longitude }}
        onClick={handleMapClick}
      >
        <Marker
          position={{ lat: center.latitude, lng: center.longitude }}
          icon={blueMarkerIcon}
        />
        {locations.map((location, key) => (
          <Marker
            key={key}
            position={{ lat: location.latitude, lng: location.longitude }}
            // icon={redMarkerIcon}
          />
        ))}{" "}
      </GoogleMap>
    </>
  )
}

export default MapComponent
