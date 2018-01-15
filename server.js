import express from "express";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import schema from "./schema.js";

const app = express();

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "graphql"
  })
);

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.listen(3000, () => {
  console.log("Listening on port 300");
});
