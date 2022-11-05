import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import styles from "./app.modules.css";

import "./styles/app.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const containerStyle = {};
const mapStyle = {
  width: "100%",
  height: "100vh",
  marginLeft: "auto",
};

export default function SimpleMap() {
  const [userLocation, setuserLocation] = useState({
    lat: 43.99835602,
    lng: -77.01502627,
  });
  const defaultProps = {
    center: userLocation,
    zoom: 13,
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(
          `Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`
        );
        setuserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "20px" }}>
          <h1 style={{ fontSize: "32px" }}>RouteMixer</h1>
        </div>
        <div
          className="container"
          style={{
            padding: "10%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="form">
            <p>aSasaSasaSasaSa</p>
          </div>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyANEFi4Q4JlBGKxU3Il9MpEph9yM3BZf9c",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div
          style={{
            height: "50vh",
            width: "50%",
            marginLeft: "auto",
            marginRight: "20px",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}
