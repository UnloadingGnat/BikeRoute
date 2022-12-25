https://devpost.com/software/routemixer

Inspiration

We are all active students who often walk and cycle as a form of leisure. However, we realized that this form of exercise becomes extremely monotonous to keep on walking/cycling the same routes daily/weekly.

RouteMixer aims to solve this issue by randomly generating a route for walking or biking to help you explore a new path, or traverse a new trail!
What it does

RouteMixer detects the user's location, and asks the user for the distance they want to bike/walk. Using this information, it generates a random route of that length from the user's location. This route is then presented on map generated via Google Maps.
How we built it

RouteMixer is a single page app built using React JS, HTML, CSS, JS. The user's current location is found using Javascript. Additionally, the Google Maps API in conjunction with React JS is used to display the map. This was done using the open source Google-Map-React library.

To use Google Maps, we went on the Google Cloud Console to generate a Google Maps API key and enable the relevant services (Maps Javascript API, Directions API, Distance Matrix API and the Geocoding API).

We built an algorithm in JS to randomly generate points on the circumference of a circle with the radius given by distance from the initial location. A random point on the circumference is then selected, and we use React/Google Maps to render a route from the initial location to that point.
Challenges we ran into

None of us had any experience with Google Cloud Services or the Google Maps API. We spent quite a bit of time generating the API key, enabling relevant services and then troubleshooting to understand why certain aspects didn't work at first (e.g. bad calls to the API, certain services not enabled, etc.)

Another challenge that was more difficult than expected was generating the random locations. This is because we get the user's current locations in latitude and longitude. Finding points (in latitude and longitude) that were the required distance away required quite a bit of research and mathematics.
Accomplishments that we're proud of

Given the short time frame and our inexperience with many of the crucial libraries in this project (google-maps-react, and the API), we are proud to have completed the working prototype.
What we learned

We learned quite a bit about Google Cloud Services, the Google Maps API and about APIs in general due to our debugging/research. 
