/**
 * Created by emmanuel on 11/5/15.
 */

Template.bookList.helpers({
    book: function() {
         return Books.find();
    }
});