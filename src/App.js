import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [userLocation, setuserLocation] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });
  const defaultProps = {
    center: userLocation,
    zoom: 11,
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        console.log(
          `Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`
        ),
      (err) => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyANEFi4Q4JlBGKxU3Il9MpEph9yM3BZf9c" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
