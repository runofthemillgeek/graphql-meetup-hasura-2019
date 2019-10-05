const typeDefs = `
  type Query {
    pinnedWeather(location: String!): LocationForecast
    ratings: [Rating!]!
  }

  type Mutation {
    updateRating(emoji: String!): Int!
  }

  type Rating {
    emoji: String!
    count: Int!
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
