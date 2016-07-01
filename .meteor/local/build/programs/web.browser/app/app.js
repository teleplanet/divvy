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
    return Spacebars.call(view.lookup("authInProcess"));                                                             // 8
  }, function() {                                                                                                    // 9
    return [ "\n			", HTML.P("loading ..."), "\n		" ];                                                               // 10
  }, function() {                                                                                                    // 11
    return [ "\n			", Blaze.If(function() {                                                                          // 12
      return Spacebars.call(view.lookup("canShow"));                                                                 // 13
    }, function() {                                                                                                  // 14
      return [ "\n		  		", HTML.P("This is the area for adding a new post"), "\n		  		", HTML.DIV({                  // 15
        "class": "js-logout"                                                                                         // 16
      }, "\n					", HTML.I({                                                                                         // 17
        "class": "material-icons"                                                                                    // 18
      }, "exit_to_app"), "\n					Sign out\n				"), "\n			" ];                                                        // 19
    }, function() {                                                                                                  // 20
      return [ "\n		  		", Spacebars.include(view.lookupTemplate("auth_signin")), "\n				", Spacebars.include(view.lookupTemplate("auth_signup")), "\n			" ];
    }), "\n		" ];                                                                                                    // 22
  }), "\n	");                                                                                                        // 23
}));                                                                                                                 // 24
                                                                                                                     // 25
Template.__checkName("auth_signin");                                                                                 // 26
Template["auth_signin"] = new Template("Template.auth_signin", (function() {                                         // 27
  var view = this;                                                                                                   // 28
  return [ HTML.Raw("<h1>Sign in</h1>\n	"), HTML.FORM({                                                              // 29
    "class": "js-signin"                                                                                             // 30
  }, "\n		", HTML.Raw('<input type="email" name="email" required="required" placeholder="Email Address">'), "\n		", HTML.Raw("<br>"), "\n		", HTML.Raw('<input type="password" name="password" required="required" placeholder="Password">'), "\n		", HTML.Raw("<br>"), "\n		", Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));                                                               // 32
  }), "\n		", HTML.Raw("<br>"), "\n		", HTML.Raw('<input type="submit" value="Sign In">'), "\n	") ];                 // 33
}));                                                                                                                 // 34
                                                                                                                     // 35
Template.__checkName("auth_signup");                                                                                 // 36
Template["auth_signup"] = new Template("Template.auth_signup", (function() {                                         // 37
  var view = this;                                                                                                   // 38
  return HTML.FORM({                                                                                                 // 39
    "class": "js-signup"                                                                                             // 40
  }, HTML.Raw('\n		<input type="text" name="name" required="required" placeholder="Your name">\n		<br>\n\n		<input type="email" name="email" class="js-email" required="required" placeholder="Email Address">\n		<br>\n		'), Blaze.View("lookup:checkMessage", function() {
    return Spacebars.mustache(view.lookup("checkMessage"));                                                          // 42
  }), HTML.Raw('<br>\n		<input type="password" name="password" required="required" placeholder="Password">\n		<br>\n\n		<input type="password" name="confirm" required="required" placeholder="Re-type Password">\n		<br>\n		'), Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));                                                               // 44
  }), HTML.Raw('\n		<br>\n		<input type="submit" value="Sign Up">\n	'));                                             // 45
}));                                                                                                                 // 46
                                                                                                                     // 47
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
		this.check_message = new ReactiveVar('');                                                                          // 11
	}                                                                                                                   // 12
                                                                                                                     //
	return onCreated;                                                                                                   // 9
}());                                                                                                                // 9
                                                                                                                     //
Template.auth_signin.onCreated(function () {                                                                         // 14
	function onCreated() {                                                                                              // 14
		this.message = new ReactiveVar('');                                                                                // 15
	}                                                                                                                   // 16
                                                                                                                     //
	return onCreated;                                                                                                   // 14
}());                                                                                                                // 14
                                                                                                                     //
//-------------------HELPERS----------------------------                                                             //
Template.comp_auth.helpers({                                                                                         // 19
	authInProcess: function () {                                                                                        // 20
		function authInProcess() {                                                                                         // 20
			return Meteor.loggingIn();                                                                                        // 21
		}                                                                                                                  // 22
                                                                                                                     //
		return authInProcess;                                                                                              // 20
	}(),                                                                                                                // 20
	canShow: function () {                                                                                              // 23
		function canShow() {                                                                                               // 23
			return !!Meteor.user();                                                                                           // 24
		}                                                                                                                  // 25
                                                                                                                     //
		return canShow;                                                                                                    // 23
	}()                                                                                                                 // 23
});                                                                                                                  // 19
                                                                                                                     //
Template.auth_signup.helpers({                                                                                       // 28
	message: function () {                                                                                              // 29
		function message() {                                                                                               // 28
			return Template.instance().message.get();                                                                         // 30
		}                                                                                                                  // 31
                                                                                                                     //
		return message;                                                                                                    // 28
	}(),                                                                                                                // 28
	checkMessage: function () {                                                                                         // 32
		function checkMessage() {                                                                                          // 28
			return Template.instance().check_message.get();                                                                   // 33
		}                                                                                                                  // 34
                                                                                                                     //
		return checkMessage;                                                                                               // 28
	}()                                                                                                                 // 28
});                                                                                                                  // 28
                                                                                                                     //
Template.auth_signin.helpers({                                                                                       // 37
	message: function () {                                                                                              // 38
		function message() {                                                                                               // 37
			return Template.instance().message.get();                                                                         // 39
		}                                                                                                                  // 40
                                                                                                                     //
		return message;                                                                                                    // 37
	}()                                                                                                                 // 37
});                                                                                                                  // 37
                                                                                                                     //
//-------------------EVENTS-----------------------------                                                             //
Template.comp_auth.events({                                                                                          // 45
	'click .js-logout': function () {                                                                                   // 46
		function clickJsLogout(event, instance) {                                                                          // 45
			Meteor.logout();                                                                                                  // 47
		}                                                                                                                  // 48
                                                                                                                     //
		return clickJsLogout;                                                                                              // 45
	}()                                                                                                                 // 45
});                                                                                                                  // 45
                                                                                                                     //
//Sign In                                                                                                            //
Template.auth_signin.events({                                                                                        // 52
	'submit .js-signin': function () {                                                                                  // 53
		function submitJsSignin(event, instance) {                                                                         // 52
			event.preventDefault();                                                                                           // 54
                                                                                                                     //
			var target = event.target;                                                                                        // 56
                                                                                                                     //
			var email = target.email.value;                                                                                   // 58
			var password = target.password.value;                                                                             // 59
                                                                                                                     //
			Meteor.loginWithPassword(email, password, function (error, data) {                                                // 61
				if (error) instance.message.set(error.reason);                                                                   // 62
			});                                                                                                               // 64
		}                                                                                                                  // 65
                                                                                                                     //
		return submitJsSignin;                                                                                             // 52
	}()                                                                                                                 // 52
});                                                                                                                  // 52
                                                                                                                     //
//Sign Up                                                                                                            //
Template.auth_signup.events({                                                                                        // 69
	'change .js-email': function () {                                                                                   // 70
		function changeJsEmail(event, instance) {                                                                          // 69
			var email = event.target.value;                                                                                   // 71
                                                                                                                     //
			//check if email account already exists                                                                           //
			Meteor.call('auth.validateEmail', email, function (error, data) {                                                 // 74
				if (error) {                                                                                                     // 75
					console.log(error);                                                                                             // 76
				} else {                                                                                                         // 77
					//false - Email validated - continue with registration                                                          //
					if (data) {                                                                                                     // 79
						instance.check_message.set("Valid Email");                                                                     // 80
					}                                                                                                               // 81
					//if true - show error: Email Account already exists                                                            //
					else {                                                                                                          // 79
							instance.check_message.set("Email already exists");                                                           // 84
						}                                                                                                              // 85
				}                                                                                                                // 86
			});                                                                                                               // 87
		}                                                                                                                  // 88
                                                                                                                     //
		return changeJsEmail;                                                                                              // 69
	}(),                                                                                                                // 69
	'submit .js-signup': function () {                                                                                  // 89
		function submitJsSignup(event, instance) {                                                                         // 69
			event.preventDefault();                                                                                           // 90
                                                                                                                     //
			//get html form                                                                                                   //
			var target = event.target;                                                                                        // 93
                                                                                                                     //
			// Check for equality with the password inputs                                                                    //
			if (user.password != target.confirm.value) return false;                                                          // 96
                                                                                                                     //
			//create user object                                                                                              //
			var user = {                                                                                                      // 100
				email: target.email.value,                                                                                       // 101
				password: target.password.value,                                                                                 // 102
				profile: {                                                                                                       // 103
					name: target.name.value                                                                                         // 104
				}                                                                                                                // 103
			};                                                                                                                // 100
                                                                                                                     //
			//create new user account                                                                                         //
			Accounts.createUser(user, function (error) {                                                                      // 109
				if (error) {                                                                                                     // 110
					instance.message.set(error.reason);                                                                             // 111
				} else {                                                                                                         // 112
					/* Meteor.call( 'sendVerificationLink', ( error, response ) => {                                                //
        if ( error ) {                                                                                               //
          Bert.alert( error.reason, 'danger' );                                                                      //
        } else {                                                                                                     //
          Bert.alert( 'Welcome!', 'success' );                                                                       //
        }                                                                                                            //
      });*/                                                                                                          //
				}                                                                                                                // 120
			});                                                                                                               // 121
		}                                                                                                                  // 122
                                                                                                                     //
		return submitJsSignup;                                                                                             // 69
	}()                                                                                                                 // 69
});                                                                                                                  // 69
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
  }, "\n    ", Blaze._TemplateWith(function() {                                                                      // 11
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
		var handle = Meteor.subscribe('user.details');                                                                     // 7
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