import express from "express";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
const app = express();

app.use("/graphiql", graphiqlExpress({ endpointURL: "/" }));

app.listen(3000, () => {
  console.log("Listening on port 300");
});
