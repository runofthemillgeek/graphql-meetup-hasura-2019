const axios = require("axios").default;

const resolvers = {
  Query: {
    async pinnedWeather() {
      const response = await axios.get(`http://apis.is/weather/forecasts/en`, {
        params: {
          stations: "1"
        }
      });

      const { W: info, T: temperature } = response.data.results[0].forecast[0];

      return {
        location: {
          name: "Reykjavik"
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
