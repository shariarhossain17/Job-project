
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import '../Css/Map.css';

const UserMap = () => {
const position = [51.505, -0.09]
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-12">
        <MapContainer className="map-container" center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=9mN5TLARTvkKdMI7zibi"
    />

  </MapContainer>
        </div>
    </div>
   </div>
   </>
  );
};

export default UserMap;
