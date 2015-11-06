/**
 * Created by emmanuel on 11/5/15.
 */

Books = new Mongo.Collection("books");

//We declare schema on both the client and server.
// the schema `can` be different, however client schema should be a subset of the server schema

var bookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
});

Books.attachSchema(bookSchema);
