var require = meteorInstall({"imports":{"ui":{"components":{"comp_auth":{"auth.html":["./template.auth.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_auth/auth.html                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("./template.auth.js");                                                                      // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.auth.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_auth/template.auth.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("comp_auth");                                                                                   // 2
Template["comp_auth"] = new Template("Template.comp_auth", (function() {                                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": "auth-layout"                                                                                           // 6
  }, "\n		", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("currentUser"));                                                               // 8
  }, function() {                                                                                                    // 9
    return "\n			\n		";                                                                                              // 10
  }, function() {                                                                                                    // 11
    return [ "\n			", Spacebars.include(view.lookupTemplate("auth_signin")), "\n			", Spacebars.include(view.lookupTemplate("auth_signup")), "\n		" ];
  }), "\n	");                                                                                                        // 13
}));                                                                                                                 // 14
                                                                                                                     // 15
Template.__checkName("auth_signin");                                                                                 // 16
Template["auth_signin"] = new Template("Template.auth_signin", (function() {                                         // 17
  var view = this;                                                                                                   // 18
  return [ HTML.Raw("<h1>Sign in</h1>\n	"), HTML.FORM({                                                              // 19
    "class": "js-signin"                                                                                             // 20
  }, "\n		", HTML.Raw('<input type="email" name="email" required="required" placeholder="Email Address">'), "\n		", HTML.Raw("<br>"), "\n\n		", HTML.Raw('<input type="password" name="password" required="required" placeholder="Password">'), "\n		", HTML.Raw("<br>"), "\n		", Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));                                                               // 22
  }), "\n		", HTML.Raw("<br>"), "\n		", HTML.Raw('<input type="submit" value="Sign In">'), "\n	") ];                 // 23
}));                                                                                                                 // 24
                                                                                                                     // 25
Template.__checkName("auth_signup");                                                                                 // 26
Template["auth_signup"] = new Template("Template.auth_signup", (function() {                                         // 27
  var view = this;                                                                                                   // 28
  return HTML.FORM({                                                                                                 // 29
    "class": "js-signup"                                                                                             // 30
  }, HTML.Raw('\n		<input type="text" name="name" required="required" placeholder="Your name">\n		<br>\n\n		<input type="email" name="email" class="js-email" required="required" placeholder="Email Address">\n		<br>\n\n		<input type="password" name="password" required="required" placeholder="Password">\n		<br>\n\n		<input type="password" name="confirm" required="required" placeholder="Re-type Password">\n		<br>\n		'), Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));                                                               // 32
  }), HTML.Raw('\n		<br>\n		<input type="submit" value="Sign Up">\n	'));                                             // 33
}));                                                                                                                 // 34
                                                                                                                     // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"auth.css":["meteor/modules",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_auth/auth.css                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("meteor/modules").addStyles(                                                                // 1
  "/*------------- AUTH STYLESHEET -------------------*/\n/* \n\tDeveloper: Daniel Abrantes; \n\tGitHub: figaru;\n*/\n\n/*------------- Signup css style -------------------*/\n\n\n\n/*--------------------------------------------------*/"
);                                                                                                                   // 3
                                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"auth.js":["./auth.html","./auth.css","meteor/accounts-base","meteor/reactive-var",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_auth/auth.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./auth.html');module.import('./auth.css');var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});
                                                                                                                     // 2
                                                                                                                     //
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
//-------------------ONCREATE--------------------------                                                              //
Template.auth_signup.onCreated(function () {                                                                         // 9
	function onCreated() {                                                                                              // 9
		this.message = new ReactiveVar('');                                                                                // 10
	}                                                                                                                   // 11
                                                                                                                     //
	return onCreated;                                                                                                   // 9
}());                                                                                                                // 9
                                                                                                                     //
Template.auth_signin.onCreated(function () {                                                                         // 13
	function onCreated() {                                                                                              // 13
		this.message = new ReactiveVar('');                                                                                // 14
	}                                                                                                                   // 15
                                                                                                                     //
	return onCreated;                                                                                                   // 13
}());                                                                                                                // 13
                                                                                                                     //
//-------------------HELPERS----------------------------                                                             //
Template.auth_signup.helpers({                                                                                       // 18
	message: function () {                                                                                              // 19
		function message() {                                                                                               // 18
			return Template.instance().message.get();                                                                         // 20
		}                                                                                                                  // 21
                                                                                                                     //
		return message;                                                                                                    // 18
	}()                                                                                                                 // 18
});                                                                                                                  // 18
                                                                                                                     //
Template.auth_signin.helpers({                                                                                       // 24
	message: function () {                                                                                              // 25
		function message() {                                                                                               // 24
			return Template.instance().message.get();                                                                         // 26
		}                                                                                                                  // 27
                                                                                                                     //
		return message;                                                                                                    // 24
	}()                                                                                                                 // 24
});                                                                                                                  // 24
                                                                                                                     //
//-------------------EVENTS-----------------------------                                                             //
//Sign In                                                                                                            //
Template.auth_signin.events({                                                                                        // 33
	'submit .js-signin': function () {                                                                                  // 34
		function submitJsSignin(event, instance) {                                                                         // 33
			event.preventDefault();                                                                                           // 35
                                                                                                                     //
			var target = event.target;                                                                                        // 37
                                                                                                                     //
			var email = target.email.value;                                                                                   // 39
			var password = target.password.value;                                                                             // 40
                                                                                                                     //
			Meteor.loginWithPassword(email, password, function (error, data) {                                                // 42
				if (error) instance.message.set(error.reason);                                                                   // 43
			});                                                                                                               // 45
		}                                                                                                                  // 46
                                                                                                                     //
		return submitJsSignin;                                                                                             // 33
	}()                                                                                                                 // 33
});                                                                                                                  // 33
                                                                                                                     //
//Sign Up                                                                                                            //
Template.auth_signup.events({                                                                                        // 50
	'change .js-email': function () {                                                                                   // 51
		function changeJsEmail(event, instance) {                                                                          // 50
			var email = event.target.value;                                                                                   // 52
                                                                                                                     //
			//check if email account already exists                                                                           //
			Meteor.call('auth.validateEmail', email, function (error, data) {                                                 // 55
				if (error) {                                                                                                     // 56
					console.log(error);                                                                                             // 57
				} else {                                                                                                         // 58
					//if true - show error: Email Account already exists                                                            //
					if (data) {}                                                                                                    // 60
					//false - Email validated - continue with registration                                                          //
					else {}                                                                                                         // 60
				}                                                                                                                // 67
			});                                                                                                               // 68
		}                                                                                                                  // 69
                                                                                                                     //
		return changeJsEmail;                                                                                              // 50
	}(),                                                                                                                // 50
	'submit .js-signup': function () {                                                                                  // 70
		function submitJsSignup(event, instance) {                                                                         // 50
			event.preventDefault();                                                                                           // 71
                                                                                                                     //
			var target = event.target;                                                                                        // 73
                                                                                                                     //
			var user = {                                                                                                      // 76
				email: target.email.value,                                                                                       // 77
				password: target.password.value,                                                                                 // 78
				profile: {                                                                                                       // 79
					name: target.name.value                                                                                         // 80
				}                                                                                                                // 79
			};                                                                                                                // 76
                                                                                                                     //
			Accounts.createUser(user, function (error) {                                                                      // 84
				if (error) {                                                                                                     // 85
					instance.message.set(error.reason);                                                                             // 86
				} else {                                                                                                         // 87
					/* Meteor.call( 'sendVerificationLink', ( error, response ) => {                                                //
        if ( error ) {                                                                                               //
          Bert.alert( error.reason, 'danger' );                                                                      //
        } else {                                                                                                     //
          Bert.alert( 'Welcome!', 'success' );                                                                       //
        }                                                                                                            //
      });*/                                                                                                          //
				}                                                                                                                // 95
			});                                                                                                               // 96
		}                                                                                                                  // 97
                                                                                                                     //
		return submitJsSignup;                                                                                             // 50
	}()                                                                                                                 // 50
});                                                                                                                  // 50
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"comp_header":{"header.html":["./template.header.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_header/header.html                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("./template.header.js");                                                                    // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.header.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_header/template.header.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("comp_header");                                                                                 // 2
Template["comp_header"] = new Template("Template.comp_header", (function() {                                         // 3
  var view = this;                                                                                                   // 4
  return HTML.Raw("<h1>Header</h1>");                                                                                // 5
}));                                                                                                                 // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":["./header.html","meteor/templating",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/comp_header/header.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./header.html');var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"pages":{"home":{"home.html":["./template.home.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/pages/home/home.html                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("./template.home.js");                                                                      // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.home.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/pages/home/template.home.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Home");                                                                                        // 2
Template["Home"] = new Template("Template.Home", (function() {                                                       // 3
  var view = this;                                                                                                   // 4
  return "Home page";                                                                                                // 5
}));                                                                                                                 // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":["./home.html","meteor/meteor","meteor/reactive-var","meteor/reactive-dict","meteor/templating","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/pages/home/home.js                                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./home.html');var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});var ReactiveDict;module.import('meteor/reactive-dict',{"ReactiveDict":function(v){ReactiveDict=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                                                     //
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"layouts":{"app_main.html":["./template.app_main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/layouts/app_main.html                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("./template.app_main.js");                                                                  // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.app_main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/layouts/template.app_main.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("App_main");                                                                                    // 2
Template["App_main"] = new Template("Template.App_main", (function() {                                               // 3
  var view = this;                                                                                                   // 4
  return [ HTML.DIV({                                                                                                // 5
    "class": "wrapper"                                                                                               // 6
  }, "\n  ", HTML.HEADER({                                                                                           // 7
    "class": "header"                                                                                                // 8
  }, "\n  	", Spacebars.include(view.lookupTemplate("comp_header")), "\n  "), "\n  ", HTML.MAIN({                    // 9
    "class": "main"                                                                                                  // 10
  }, "\n  	", HTML.Raw('<i class="material-icons">face</i>'), "\n    ", Blaze._TemplateWith(function() {             // 11
    return {                                                                                                         // 12
      template: Spacebars.call(view.lookup("content"))                                                               // 13
    };                                                                                                               // 14
  }, function() {                                                                                                    // 15
    return Spacebars.include(function() {                                                                            // 16
      return Spacebars.call(Template.__dynamic);                                                                     // 17
    });                                                                                                              // 18
  }), "\n  "), "\n  ", HTML.Raw('<footer class="footer">Meteor</footer>'), "\n"), "\n\n ", Spacebars.include(view.lookupTemplate("comp_auth")) ];
}));                                                                                                                 // 20
                                                                                                                     // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"app_main.css":["meteor/modules",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/layouts/app_main.css                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("meteor/modules").addStyles(                                                                // 1
  ".wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;  \n  \n  -webkit-flex-flow: row wrap;\n  flex-flow: row wrap;\n  \n  font-weight: bold;\n  text-align: center;\n}\n\n.wrapper > * {\n  flex: 1 100%;\n}\n\n.header {\n  background: tomato;\n}\n\n.footer {\n  background: lightgreen;\n}\n\n.main {\n  text-align: left;\n  background: deepskyblue;\n}\n\n@media all and (min-width: 600px) {\n  .aside { flex: 1 auto; }\n}\n\n@media all and (min-width: 800px) {\n  .main    { flex: 3 0px; } \n  .main    { order: 1; }\n  .footer  { order: 2; }\n}"
);                                                                                                                   // 3
                                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"app_main.js":["./app_main.html","./app_main.css","../components/comp_header/header.js","../components/comp_auth/auth.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/layouts/app_main.js                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./app_main.html');module.import('./app_main.css');module.import('../components/comp_header/header.js');module.import('../components/comp_auth/auth.js');
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     //
Template.App_main.onCreated(function () {                                                                            // 6
	function app_mainCreate() {                                                                                         // 6
		var handle = Meteor.subscribe('user.name');                                                                        // 7
                                                                                                                     //
		Tracker.autorun(function () {                                                                                      // 9
			var isReady = handle.ready();                                                                                     // 10
			console.log('Handle is ' + (isReady ? 'ready' : 'not ready'));                                                    // 11
		});                                                                                                                // 12
	}                                                                                                                   // 13
                                                                                                                     //
	return app_mainCreate;                                                                                              // 6
}());                                                                                                                // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"startup":{"client":{"index.js":["./routes.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/startup/client/index.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./routes.js');                                                                                        // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["meteor/kadira:flow-router","meteor/kadira:blaze-layout","../../ui/layouts/app_main.js","../../ui/pages/home/home.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/startup/client/routes.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var BlazeLayout;module.import('meteor/kadira:blaze-layout',{"BlazeLayout":function(v){BlazeLayout=v}});module.import('../../ui/layouts/app_main.js');module.import('../../ui/pages/home/home.js');
                                                                                                                     // 2
                                                                                                                     //
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
FlowRouter.route('/', {                                                                                              // 8
                                                                                                                     //
  action: function () {                                                                                              // 10
    function action() {                                                                                              // 10
      BlazeLayout.render("App_main", { content: "Home" });                                                           // 11
    }                                                                                                                // 12
                                                                                                                     //
    return action;                                                                                                   // 10
  }()                                                                                                                // 10
});                                                                                                                  // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"client":{"main.js":["../imports/startup/client/index.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('../imports/startup/client/index.js');                                                                 // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");