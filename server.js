import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import schema from "./schema.js";

mongoose.connect("mongodb://localhost:27017/graphqltutorial");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Db");
});

const app = express();

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "graphql"
  })
);

app.use(
  "/graphql",
  bodyParser.json(),
  () => {
    console.log("Middleware");
    console.log(JSON.stringify(req.headers));
  },
  graphqlExpress({ schema })
);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
