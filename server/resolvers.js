const axios = require("axios").default;

const { getStationNumberByName } = require("./lib/stations");

const resolvers = {
  Query: {
    async pinnedWeather(_, { location: inputLocation }) {
      const stationNumber = getStationNumberByName(inputLocation);

      const response = await axios.get(`http://apis.is/weather/forecasts/en`, {
        params: {
          stations: stationNumber
        }
      });

      const { W: info, T: temperature } = response.data.results[0].forecast[0];

      return {
        location: {
          name: inputLocation
        },
        forecast: {
          temperature,
          unit: "C",
          info
        }
      };
    }
  }
};

module.exports = resolvers;
