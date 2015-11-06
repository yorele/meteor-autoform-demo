/**
 * Created by emmanuel on 11/5/15.
 */

AutoForm.hooks({
    methodForm: {
        before: {
            method: function (doc) {
                //add whatever you want to your doc here before submitting
                //doc['random'] = 12345;
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            //do whatever you need to do here on success (redirect etc...)
            alert("success!");
        },
        onError: function (formType, error) {
            //oops... do what you need to do on failure
            alert("oops, something went wrong: " + error);
        }
    }
});
