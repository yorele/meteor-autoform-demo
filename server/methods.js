/**
 * Created by emmanuel on 11/5/15.
 */

Meteor.methods({
        "insertBook": function (doc) {
            //if (!Meteor.userId()) {return;}
            //else {
            //Check doc against schema: we don't want to get hacked
            bookSchema.clean(doc);
            // Note: ideally you should also validate VALUES inside the doc here, not just TYPES as is checked with the schema
            //
            Books.insert(doc);
        }
    }
);