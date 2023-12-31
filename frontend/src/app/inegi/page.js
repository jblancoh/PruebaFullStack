'use client'
import { useEffect, useState, useCallback } from "react"
import { alertStore } from "../store/alertStore"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}

const SelectDistrict = ({ position, zoom, data, coords }) => {
  console.log("🚀 ~ file: page.js:15 ~ SelectDistrict ~ data:", data)
  const parentMap = useMap();
  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  
  const handleSetMapView = useCallback(
    (e) => {
      parentMap.setView([coords?.longitude, coords?.latitude], parentMap.getZoom());
    },
    [parentMap]
  );
  
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">
        <div className="w-full bg-white p-4 flex-col flex items-start space-y-4 md:flex-row md:space-x-8 md:justify-center md:items-end">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
            <button
              onClick={handleSetMapView}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Set View
            </button>
            </div>
            <div className="col-span-2 justify-center items-center">
              <select 
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onChange={(e) => {
                  const { value } = e.target
                  // hasta aqui quedo
                }}
              >
                {
                  data.map((item, index) => {
                    return <option key={index} value={item?.id}>{`${item?.district?.state} - ${item.district?.district}`}</option>
                  }
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Page  = () => {
  const [data, setData] = useState([])
  const [position, setPosition] = useState(null)
  const {setError } = alertStore()
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/inegi')
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])
  
  const showPosition = (position) => {
    setPosition(position)
  }
  
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        setError({
          message: "Geolocation is not supported by this browser.",
          type: "danger"
        })
      }
    }
    getLocation()
  }, [])
  
  return (
    <div className="border rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold p-5">INEGI</h2>
      <div className="grid grid-cols-1">
        {
          position?.coords &&
            <MapContainer
              center={[
                position?.coords.latitude,
                position?.coords.longitude,
              ]}
              zoom={4}
              scrollWheelZoom={true}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <SelectDistrict position="topright" zoom={8} data={data} coords={position?.coords}/>
            </MapContainer>
        }
      </div>
    </div>
  );
}

export default Page;