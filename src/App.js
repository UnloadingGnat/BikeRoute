import React from "react";
import GoogleMapReact from "google-map-react";
import "./index.css"
import { BiShuffle } from 'react-icons/bi';

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

    this.state = {
      currentLocation: { lat: 40.756795, lng: -73.954298 }
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 43.756795, lng: -73.954298 };
      const destination = { lat: 41.756795, lng: -78.954298 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.BICYCLING
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
              <button class="walk"></button>
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
    </div>
  );
}

export default App;
