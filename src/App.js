import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./index.css"
import { BiShuffle, BiWalk } from 'react-icons/bi';



const google = window.google;

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 43.6629, lng: -79.3957 }
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 43.6629, lng: -79.3957 };
      const destination = { lat: 43.756795, lng: -79.954298 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
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
              <div class="content-title">
                Mix up your route!
              </div>
              <div class="content-body">
                Routes for walking or cycling in one click! Try it now.
              </div>
            </div>
            <div class="dist">
              <div class="form-main">
                Distance
              </div>
              <input class="dist-input"></input>
            </div>
            <div class="route">
              <div class="route-title">Route Type</div>
              <button class="walk"><BiWalk size={30} /></button>
              <div></div>
            </div>

          </div>
          <div class="map" style={{ height: "500px", width: "40%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAT-z68sTei7w4INPO4M9GtbXQh8MjFRqo"
              }}
              defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
              defaultZoom={10}
              center={this.state.currentLocation}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleMaps;