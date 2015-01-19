Template.home.helpers({
    token : function(){
        return Meteor.user().services.facebook.accessToken;
    },
});