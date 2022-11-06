export default function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;

  var rd = radius / 111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x / Math.cos(y0);


  const result = { lat: y + y0, lng: xp + x0 };
  return result;
}



