const axios = require("axios").default;

const { getStationNumberByName } = require("./lib/stations");
const { ratingsStore } = require("./data/ratingsStore");

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
    },

    ratings() {
      return Object.keys(ratingsStore.ratings).map(emoji => ({
        emoji,
        count: ratingsStore.getCount(emoji)
      }));
    }
  },

  Mutation: {
    updateRating(_, { emoji }) {
      ratingsStore.increment(emoji);

      return ratingsStore.getCount(emoji);
    }
  }
};

module.exports = resolvers;
