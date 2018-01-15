import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

const typeDefs = `
type Person {
  age: Int
  name: String
  gender: String
}

type Query {
  persons: [Person]
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

export default schema;
