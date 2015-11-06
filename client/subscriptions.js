/**
 * Created by emmanuel on 11/5/15.
 */

/* without the autopublish package, we need to subscribe to our publication (published dataset)
to get the data on the client
 */

Tracker.autorun(function() {
    Meteor.subscribe('books');
    //subscribe with a parameter:
    //Meteor.subscribe('books', 100);
});