var require = meteorInstall({"imports":{"api":{"posts":{"posts.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/posts/posts.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({Posts:function(){return Posts}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                     //
var Posts = new Mongo.Collection('posts');                           // 3
///////////////////////////////////////////////////////////////////////

}]}}},"server":{"main.js":["meteor/meteor","../imports/api/posts/posts.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/posts/posts.js');
                                                                     // 2
                                                                     //
Meteor.startup(function () {                                         // 4
  // code to run on server at startup                                //
});                                                                  // 6
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
