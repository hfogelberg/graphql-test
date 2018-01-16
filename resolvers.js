import mongoose from "mongoose";
import authorModel from "./models/author";

const resolvers = {
  Query: {
    authors: () => {
      console.log("Find authors");
      return authorModel.find({});
    },
    author: (root, { id }) => {
      console.log("Find author with id " + id);
      return authorModel.findOne({ id });
    }
  },

  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ age: age, name: name, books: books });
      return author.save();
    }
  }
};

export default resolvers;
