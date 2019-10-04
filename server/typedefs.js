const typeDefs = `
  type Query {
    pinnedWeather: LocationForecast
  }

  type LocationForecast {
    location: Location
    forecast: Forecast
  }

  type Location {
    name: String!
  }

  type Forecast {
    temperature: Float!
    unit: TemperatureUnit!
    info: String
  }

  enum TemperatureUnit {
    C
    F
  }
`;

module.exports = typeDefs;
