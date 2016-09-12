var require = meteorInstall({"imports":{"api":{"posts":{"posts.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// imports/api/posts/posts.js                                              //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
module.export({Posts:function(){return Posts}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                           //
var Posts = new Mongo.Collection('posts');                                 // 3
/////////////////////////////////////////////////////////////////////////////

}]}}},"server":{"api":{"user":{"auth.js":function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// server/api/user/auth.js                                                 //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
// Ensuring every user has an email address, should be in server-side code
Accounts.validateNewUser(function (user) {                                 // 2
  /*new SimpleSchema({                                                     //
    _id: { type: String },                                                 //
    emails: { type: Array },                                               //
    'emails.$': { type: Object },                                          //
    'emails.$.address': { type: String },                                  //
    'emails.$.verified': { type: Boolean },                                //
    createdAt: { type: Date },                                             //
    services: { type: Object, blackbox: true }                             //
  }).validate(user);*/                                                     //
                                                                           //
  // Return true to allow user creation to proceed                         //
  return true;                                                             // 14
});                                                                        // 15
                                                                           //
Meteor.methods({                                                           // 17
  'auth.validateEmail': function authValidateEmail(email) {                // 18
    //check if email account already exists                                //
    if (Accounts.findUserByEmail(email)) {                                 // 20
      //return false if email account exists                               //
      return false;                                                        // 22
    } else {                                                               // 23
      //return true if email account does not exist                        //
      return true;                                                         // 25
    }                                                                      // 26
  }                                                                        // 27
});                                                                        // 17
/////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// server/api/user/publish.js                                              //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
Meteor.publish('user.details', function (userid) {                         // 1
  // Validate the arguments to be what we expect                           //
                                                                           //
  // Select only the users that match the array of IDs passed in           //
  var selector = {                                                         // 7
    _id: this.userId                                                       // 8
  };                                                                       // 7
                                                                           //
  // Only return one field, `initials`                                     //
  var options = {                                                          // 12
    fields: { 'profile': 1 }                                               // 13
  };                                                                       // 12
                                                                           //
  return Meteor.users.find(selector, options);                             // 16
});                                                                        // 17
/////////////////////////////////////////////////////////////////////////////

}}},"main.js":["meteor/meteor","../imports/api/posts/posts.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// server/main.js                                                          //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/posts/posts.js');
                                                                           // 2
                                                                           //
Meteor.startup(function () {                                               // 4
  // code to run on server at startup                                      //
});                                                                        // 6
/////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/api/user/auth.js");
require("./server/api/user/publish.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
