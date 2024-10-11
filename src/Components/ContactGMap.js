import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 34.0522, 
  lng: -118.2437, 
};

const GoogleMapComponent = () => {
  return (
    <div className="w-full h-[400px] p-4">
      <LoadScript googleMapsApiKey="AIzaSyAiRvzi1SVvGKpE21Zp4iF4b20xsEZSBgo">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
