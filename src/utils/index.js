function haversine(lon1, lat1, lon2, lat2) {
  lon1 = (lon1 / 180) * Math.PI;
  lat1 = (lat1 / 180) * Math.PI;
  lon2 = (lon2 / 180) * Math.PI;
  lat2 = (lat2 / 180) * Math.PI;

  var r =
    3440.1 *
    Math.acos(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)
    );
  r = r * 1.852;
  return r;
}

export default function randomLocationGenerator(lat, lng, r) {
  const max = r * 0.008;
  const min = r * 0.007;
  const randomLocs = [];

  while (randomLocs.length <= 3) {
    var newLat = lat + Math.random() * (max - min) + min;
    var newLng = lng + Math.random() * (max - min) + min;
    const g = haversine(lng, lat, newLng, newLat);

    if (r - 0.5 <= g && g <= r + 0.5) {
      console.log(g);
      const cord = [];
      cord.push(newLat);
      cord.push(newLng);
      randomLocs.push(cord);
    }
  }
  while (randomLocs.length <= 6) {
    const newLat1 = lat - Math.random() * (max - min) + min;
    const newLng1 = lng - Math.random() * (max - min) + min;
    const h = haversine(lng, lat, newLng1, newLat1);

    if (r - 0.5 <= h && h <= r + 0.5) {
      console.log(h);
      const cord = [];
      cord.push(newLat1);
      cord.push(newLng1);
      randomLocs.push(cord);
    }
  }

  
  const result = randomLocs[Math.floor(Math.random() * randomLocs.length)];

  console.log(lat + " " + lng);
  console.log("Destination:" + result);
  // console.log(randomLocs);
  // return randomLocs;
  console.log(randomLocs);
  return result;
}
//Destination:44.279707355264435,-78.66630561554462

// randomLocationGenerator(43.6597734, -79.3985264, 5);
