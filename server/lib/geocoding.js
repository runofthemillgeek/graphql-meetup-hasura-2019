const axios = require("axios");

const cache = {};

async function getCoordinates(name) {
  if (cache[name]) return cache[name];

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      name
    )}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`
  );

  console.log(response.data);

  cache[name] = response.data.results[0].geometry.location;

  return cache[name];
}

module.exports = {
  getCoordinates
};
