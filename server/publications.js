/**
 * Created by emmanuel on 11/5/15.
 */

/* without autopublish, you need to publish the data you want to be accessbile from the client */


Meteor.publish('books', function(limit){
   // return all books: the query {} is for `everything`
   return Books.find({});
   // return all but limit the number by the parameter:
   //return Books.find({}, {limit: limit || 100});
   // return all but limit the fields that are published:
   //return Books.find({}, {limit: limit || 100, fields: {title: 1, author: 1}});
});
