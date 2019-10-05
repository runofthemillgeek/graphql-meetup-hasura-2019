const dotenv = require("dotenv");

dotenv.config({
  example: ".env.sample"
});

const { GraphQLServer } = require("graphql-yoga");

const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(
  {
    playground: process.env.NODE_ENV === "development" ? "/" : false
  },
  () =>
    console.log(
      "🚀 Server is running. Open playground on http://localhost:4000"
    )
);
