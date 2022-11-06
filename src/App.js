import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import getDistanced from "./utils/main.js";

function App() {
  const google = window.google;
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7567,
    lng: -73.9549,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            `Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`
          );
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => alert(`Error (${err.code}): ${err.message}`)
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  async function getDistance(origin, destination) {
    // const response = await axios.get(
    //   "https://maps.googleapis.com/maps/api/distancematrix/json",
    //   {
    //     params: {
    //       origins: `${origin.lat},${origin.lng}`,
    //       destinations: `${destination.lat},${destination.lng}`,
    //       key: "AIzaSyAT-z68sTei7w4INPO4M9GtbXQh8MjFRqo",
    //     },
    //   }
    // );
    getDistanced();
    return 0;
  }
  function apiIsLoaded(map, maps) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: currentLocation.lat, lng: currentLocation.lng };
    const destination = { lat: 43.6544, lng: -79.3807 };
    getDistance(origin, destination);
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.BICYCLING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }
  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAT-z68sTei7w4INPO4M9GtbXQh8MjFRqo",
          }}
          defaultCenter={{ lat: currentLocation.lat, lng: currentLocation.lng }}
          defaultZoom={10}
          center={currentLocation}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
    </div>
  );
}

export default App;
