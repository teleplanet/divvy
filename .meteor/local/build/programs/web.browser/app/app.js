var require = meteorInstall({"imports":{"ui":{"pages":{"home":{"home.html":["./template.home.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/pages/home/home.html                                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./template.home.js");                                                                  // 1
                                                                                                                 // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.home.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/pages/home/template.home.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("Home");                                                                                    // 2
Template["Home"] = new Template("Template.Home", (function() {                                                   // 3
  var view = this;                                                                                               // 4
  return "Home page";                                                                                            // 5
}));                                                                                                             // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":["./home.html","meteor/meteor","meteor/reactive-var","meteor/reactive-dict","meteor/templating","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/pages/home/home.js                                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.import('./home.html');var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});var ReactiveDict;module.import('meteor/reactive-dict',{"ReactiveDict":function(v){ReactiveDict=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                                                 //
                                                                                                                 // 3
                                                                                                                 // 4
                                                                                                                 // 5
                                                                                                                 //
                                                                                                                 // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"layouts":{"app_main.html":["./template.app_main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/layouts/app_main.html                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./template.app_main.js");                                                              // 1
                                                                                                                 // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.app_main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/layouts/template.app_main.js                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("App_main");                                                                                // 2
Template["App_main"] = new Template("Template.App_main", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return [ HTML.Raw("<header><h1>Divvy</h1></header>\n  "), HTML.MAIN("\n    ", Blaze._TemplateWith(function() {
    return {                                                                                                     // 6
      template: Spacebars.call(view.lookup("content"))                                                           // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(function() {                                                                        // 10
      return Spacebars.call(Template.__dynamic);                                                                 // 11
    });                                                                                                          // 12
  }), "\n  "), HTML.Raw("\n  <footer>Meteor</footer>") ];                                                        // 13
}));                                                                                                             // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"app_main.js":["./app_main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/ui/layouts/app_main.js                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.import('./app_main.html');                                                                                // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"startup":{"client":{"index.js":["./routes.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/startup/client/index.js                                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.import('./routes.js');                                                                                    // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["meteor/kadira:flow-router","meteor/kadira:blaze-layout","../../ui/layouts/app_main.js","../../ui/pages/home/home.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/startup/client/routes.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var BlazeLayout;module.import('meteor/kadira:blaze-layout',{"BlazeLayout":function(v){BlazeLayout=v}});module.import('../../ui/layouts/app_main.js');module.import('../../ui/pages/home/home.js');
                                                                                                                 // 2
                                                                                                                 //
                                                                                                                 // 4
                                                                                                                 // 5
                                                                                                                 //
FlowRouter.route('/', {                                                                                          // 8
                                                                                                                 //
  action: function () {                                                                                          // 10
    function action() {                                                                                          // 10
      BlazeLayout.render("App_main", { content: "Home" });                                                       // 11
    }                                                                                                            // 12
                                                                                                                 //
    return action;                                                                                               // 10
  }()                                                                                                            // 10
});                                                                                                              // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"client":{"main.js":["../imports/startup/client/index.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.js                                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.import('../imports/startup/client/index.js');                                                             // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");