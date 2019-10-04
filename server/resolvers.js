const resolvers = {
  Query: {
    pinnedWeather() {
      return {
        location: {
          name: 'Reykjavik'
        },
        forecast: {
          temperature: 32,
          unit: 'C',
          info: 'Clear sky'
        }
      }
    }
  }
};

module.exports = resolvers;
