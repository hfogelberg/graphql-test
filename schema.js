import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers.js";

const typeDefs = `
type Author {
  age: Int
  name: String
  Books: [String]
}

type Query {
  authors: [Author]
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
