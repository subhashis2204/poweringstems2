import { useRef } from "react"
import axios from "axios"

function SearchBox({ setLatitude, setLongitude }) {
  const addRef = useRef()
  const latRef = useRef()
  const lonRef = useRef()

  const handleGeocodeSubmit = async () => {
    const { data } = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json",
      {
        params: {
          key: "b3f9651669044b0d91bf107b648b109b",
          q: addRef.current.value,
          limit: 1,
        },
      }
    )
    const { lat, lng } = data.results[0].geometry

    latRef.current.value = lat
    lonRef.current.value = lng

    setLatitude(lat)
    setLongitude(lng)
  }
  return (
    <>
      <form className="flex flex-col pt-2 px-12">
        <div className="flex gap-2 items-end pb-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="add" className="text-md font-bold">
              Type Your Location
            </label>
            <input
              type="text"
              id="add"
              className="rounded-md bg-gray-100 border-2 border-gray-300 focus:ring-black focus:border-black p-2 grow"
              name="add"
              placeholder="Default Location is Sydney, Australia"
              ref={addRef}
            />
          </div>
          <button
            onClick={(e) => {
              handleGeocodeSubmit()
              e.preventDefault()
            }}
            className="bg-blue-500 px-3 py-3 rounded-md text-sm text-white  md:col-start-1 md:col-span-2 hover:shadow-lg min-w-max"
          >
            Center Here
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-1">
          <div className="flex flex-col gap-2 md:col-start-1">
            <label htmlFor="lat" className="text-md font-bold">
              Latitude
            </label>
            <input
              type="text"
              id="lat"
              className="rounded-md bg-gray-100 border-2 border-gray-300 focus:ring-black focus:border-black p-2"
              ref={latRef}
              name="lat"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-start-2 col-span-1">
            <label htmlFor="lng" className="text-md font-bold">
              Longitude
            </label>
            <input
              type="text"
              id="lng"
              className="rounded-md bg-gray-100 border-2 border-gray-300 focus:ring-black focus:border-black p-2"
              ref={lonRef}
              name="lng"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default SearchBox
