/**
 * Created by emmanuel on 11/5/15.
 */

Books = new Mongo.Collection("books");

bookSchema = new SimpleSchema({
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
    /*,
    random: {
        type: String,
        optional: false,
        autoValue: function () {
            return Math.random().toString();
        }
    }
    */
});

Books.attachSchema(bookSchema);


/* without autopublish, control what's allowed / denied from the client */

Books.allow({
    insert: function() {
        //check for user credentials here...
        // if (Meteor.userId()) { return true; }
        //else { throw Error('must be logged in to do this!');
        return true;
        //}
    }
});

Books.deny({
    remove: function(userId) { return true;}, //not allowed
    update: function(userId) { return true;} //not allowed
});



/* I can also have Colections that are only visible from the server
PrivateCollection = new Mongo.Collection("private");
 */