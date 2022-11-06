import React from "react";
import GoogleMapReact from "google-map-react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BiShuffle, BiWalk, BiCycling } from "react-icons/bi";
import generateRandomPoint from "./utils/utility.js";

function App() {
  const google = window.google;
  const distance = useRef();
  const [filler, setFiller] = useState(false);
  const [desination, setDestination] = useState({
    lat: 40.7567,
    lng: -73.9549,
  });
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7567,
    lng: -73.9549,
  });

  const [locations, setLocations] = useState({
    origin: {
      lat: 40.7567,
      lng: -73.9549,
    },
    destination: {
      lat: 40.7567,
      lng: -73.9549,
    },
  });

  function handleSubmit(event) {
    event.preventDefault()
    drawRoute(distance);
  }

  function drawRoute() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            `Origin: Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`
          );
          const output = generateRandomPoint(
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
              distance
          );
          setLocations({
            origin: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            destination: {
              lat: output.lat,
              lng: output.lng,
            },
          });
        },
        (err) => alert(`Error (${err.code}): ${err.message}`)
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  function apiIsLoaded(map, maps) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: locations.origin.lat, lng: locations.origin.lng };
    const destination = {
      lat: locations.destination.lat,
      lng: locations.destination.lng,
    };
    // getDistance(locations.origin, locations.desination);
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.BICYCLING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          const distance = result.routes[0].legs[0].distance.value / 1000;
          console.log(distance);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }
  return (
    <div>
      <div class="header-bar"></div>
      <div class="title">
        <BiShuffle />
        Route Mixer
      </div>

      <div class="main">
        <div class="left-section">
          <div class="content">
            <div class="content-title">Mix up your route!</div>
            <div class="content-body">
              Routes for walking or cycling in one click! Try it now.
            </div>
          </div>
          <form>
            <div class="dist">
              <div class="form-main">Distance</div>
              <input required class="dist" ref={distance} type="text"></input>
              <span className="unit">Km</span>
            </div>
            <div class="route">
              <div class="route-title">Route Type</div>
              <button class="walk">
                <BiWalk size={30} />
              </button>
              <button class="bike">
                <BiCycling size={30} />
              </button>
            </div>
            <div class="end">
              <button onClick={(event) => handleSubmit(event)} class="mix">
                Mix!
              </button>
            </div>
          </form>
        </div>
        <div class="map" style={{ height: "500px", width: "40%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAT-z68sTei7w4INPO4M9GtbXQh8MjFRqo",
            }}
            defaultCenter={{
              lat: locations.origin.lat,
              lng: locations.origin.lng,
            }}
            defaultZoom={10}
            center={locations.origin}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
