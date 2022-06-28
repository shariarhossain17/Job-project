import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import useGeoLocation from "../../Hooks/useGeoLocation";
import '../Css/Map.css';

const markerIcon = new L.Icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });


const UserMap = () => {
  
    const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const location = useGeoLocation()
  const mapRef = useRef();
  const ZOOM_LEVEL = 9;
  const myLocation = () => {
    if (location.loaded && !location.error) {
        mapRef.current?.flyTo(
            [location.coordinates.lat, location.coordinates.lng],
            ZOOM_LEVEL,
            { animate: true },
          );
        
          
    } else {
      alert(location.error.message);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Get Your Location</h1>
        <div className="row">
          <div className="col-md-12">
            <MapContainer
              className="map-container"
              center={center}
              zoom={ZOOM_LEVEL}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=9mN5TLARTvkKdMI7zibi"
              />
             
             {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </MapContainer>
            <div className="mx-auto text-center">
            <Button onClick={myLocation} className="mt-5">My Location</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMap;
