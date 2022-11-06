const axios = require("axios").default;


export default async function getDistance() {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/distancematrix/json?origins=43.6690119,-79.391594&destinations=41.756795,-78.954298&key=AIzaSyAT-z68sTei7w4INPO4M9GtbXQh8MjFRqo",
    {
      headers: {
        authority: "maps.googleapis.com",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        "sec-ch-ua-arch": '"x86"',
        "sec-ch-ua-bitness": '"64"',
        "sec-ch-ua-full-version": '"107.0.5304.87"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": '""',
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        "x-client-data":
          "CKi1yQEIjrbJAQiitskBCMS2yQEIqZ3KAQiMl8sBCJKhywEIubzMAQimvcwBCMThzAEIqeTMAQjY6MwBCPvozAEIsevMAQia7MwBCO/tzAE=",
      },
    }
  );
  const data = await response.data;
  console.log(data);
  return data;
}
