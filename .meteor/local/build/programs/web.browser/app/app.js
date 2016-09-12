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
    "class": "form-main-style js-signin"                                                                             // 30
  }, "\n		", HTML.Raw('<input type="email" name="email" required="required" placeholder="Email Address">'), "\n		", HTML.Raw("<br>"), "\n		", HTML.Raw('<input type="password" name="password" required="required" placeholder="Password">'), "\n		", HTML.Raw("<br>"), "\n		", Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));                                                               // 32
  }), "\n		", HTML.Raw("<br>"), "\n		", HTML.Raw('<input type="submit" value="Sign In">'), "\n	") ];                 // 33
}));                                                                                                                 // 34
                                                                                                                     // 35
Template.__checkName("auth_signup");                                                                                 // 36
Template["auth_signup"] = new Template("Template.auth_signup", (function() {                                         // 37
  var view = this;                                                                                                   // 38
  return HTML.FORM({                                                                                                 // 39
    "class": "form-main-style js-signup"                                                                             // 40
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
//SIGN UP                                                                                                            //
Template.auth_signup.onCreated(function () {                                                                         // 10
	function onCreated() {                                                                                              // 10
		this.message = new ReactiveVar('');                                                                                // 11
		this.check_message = new ReactiveVar('');                                                                          // 12
	}                                                                                                                   // 13
                                                                                                                     //
	return onCreated;                                                                                                   // 10
}());                                                                                                                // 10
                                                                                                                     //
//SIGN IN                                                                                                            //
Template.auth_signin.onCreated(function () {                                                                         // 16
	function onCreated() {                                                                                              // 16
		this.message = new ReactiveVar('');                                                                                // 17
	}                                                                                                                   // 18
                                                                                                                     //
	return onCreated;                                                                                                   // 16
}());                                                                                                                // 16
                                                                                                                     //
//-------------------HELPERS----------------------------                                                             //
//AUTHENTICATION                                                                                                     //
Template.comp_auth.helpers({                                                                                         // 22
	authInProcess: function () {                                                                                        // 23
		function authInProcess() {                                                                                         // 23
			return Meteor.loggingIn();                                                                                        // 24
		}                                                                                                                  // 25
                                                                                                                     //
		return authInProcess;                                                                                              // 23
	}(),                                                                                                                // 23
	canShow: function () {                                                                                              // 26
		function canShow() {                                                                                               // 26
			return !!Meteor.user();                                                                                           // 27
		}                                                                                                                  // 28
                                                                                                                     //
		return canShow;                                                                                                    // 26
	}()                                                                                                                 // 26
});                                                                                                                  // 22
                                                                                                                     //
//SIGN UP                                                                                                            //
Template.auth_signup.helpers({                                                                                       // 32
	message: function () {                                                                                              // 33
		function message() {                                                                                               // 32
			return Template.instance().message.get();                                                                         // 34
		}                                                                                                                  // 35
                                                                                                                     //
		return message;                                                                                                    // 32
	}(),                                                                                                                // 32
	checkMessage: function () {                                                                                         // 36
		function checkMessage() {                                                                                          // 32
			return Template.instance().check_message.get();                                                                   // 37
		}                                                                                                                  // 38
                                                                                                                     //
		return checkMessage;                                                                                               // 32
	}()                                                                                                                 // 32
});                                                                                                                  // 32
                                                                                                                     //
//SIGN IN                                                                                                            //
Template.auth_signin.helpers({                                                                                       // 42
	message: function () {                                                                                              // 43
		function message() {                                                                                               // 42
			return Template.instance().message.get();                                                                         // 44
		}                                                                                                                  // 45
                                                                                                                     //
		return message;                                                                                                    // 42
	}()                                                                                                                 // 42
});                                                                                                                  // 42
                                                                                                                     //
//-------------------EVENTS-----------------------------                                                             //
Template.comp_auth.events({                                                                                          // 50
	'click .js-logout': function () {                                                                                   // 51
		function clickJsLogout(event, instance) {                                                                          // 50
			Meteor.logout();                                                                                                  // 52
		}                                                                                                                  // 53
                                                                                                                     //
		return clickJsLogout;                                                                                              // 50
	}()                                                                                                                 // 50
});                                                                                                                  // 50
                                                                                                                     //
//Sign In                                                                                                            //
Template.auth_signin.events({                                                                                        // 57
	'submit .js-signin': function () {                                                                                  // 58
		function submitJsSignin(event, instance) {                                                                         // 57
			event.preventDefault();                                                                                           // 59
                                                                                                                     //
			var target = event.target;                                                                                        // 61
                                                                                                                     //
			var email = target.email.value;                                                                                   // 63
			var password = target.password.value;                                                                             // 64
                                                                                                                     //
			Meteor.loginWithPassword(email, password, function (error, data) {                                                // 66
				if (error) instance.message.set(error.reason);                                                                   // 67
			});                                                                                                               // 69
		}                                                                                                                  // 70
                                                                                                                     //
		return submitJsSignin;                                                                                             // 57
	}()                                                                                                                 // 57
});                                                                                                                  // 57
                                                                                                                     //
//Sign Up                                                                                                            //
Template.auth_signup.events({                                                                                        // 74
	'change .js-email': function () {                                                                                   // 75
		function changeJsEmail(event, instance) {                                                                          // 74
			var email = event.target.value;                                                                                   // 76
                                                                                                                     //
			//check if email account already exists                                                                           //
			Meteor.call('auth.validateEmail', email, function (error, data) {                                                 // 79
				if (error) {                                                                                                     // 80
					console.log(error);                                                                                             // 81
				} else {                                                                                                         // 82
					//false - Email validated - continue with registration                                                          //
					if (data) {                                                                                                     // 84
						instance.check_message.set("Valid Email");                                                                     // 85
					}                                                                                                               // 86
					//if true - show error: Email Account already exists                                                            //
					else {                                                                                                          // 84
							instance.check_message.set("Email already exists");                                                           // 89
						}                                                                                                              // 90
				}                                                                                                                // 91
			});                                                                                                               // 92
		}                                                                                                                  // 93
                                                                                                                     //
		return changeJsEmail;                                                                                              // 74
	}(),                                                                                                                // 74
	'submit .js-signup': function () {                                                                                  // 94
		function submitJsSignup(event, instance) {                                                                         // 74
			event.preventDefault();                                                                                           // 95
                                                                                                                     //
			//get html form                                                                                                   //
			var target = event.target;                                                                                        // 98
                                                                                                                     //
			// Check for equality with the password inputs                                                                    //
			if (user.password != target.confirm.value) return false;                                                          // 101
                                                                                                                     //
			//create user object                                                                                              //
			var user = {                                                                                                      // 105
				email: target.email.value,                                                                                       // 106
				password: target.password.value,                                                                                 // 107
				profile: {                                                                                                       // 108
					name: target.name.value                                                                                         // 109
				}                                                                                                                // 108
			};                                                                                                                // 105
                                                                                                                     //
			//create new user account                                                                                         //
			Accounts.createUser(user, function (error) {                                                                      // 114
				if (error) {                                                                                                     // 115
					instance.message.set(error.reason);                                                                             // 116
				} else {                                                                                                         // 117
					/* Meteor.call( 'sendVerificationLink', ( error, response ) => {                                                //
        if ( error ) {                                                                                               //
          Bert.alert( error.reason, 'danger' );                                                                      //
        } else {                                                                                                     //
          Bert.alert( 'Welcome!', 'success' );                                                                       //
        }                                                                                                            //
      });*/                                                                                                          //
				}                                                                                                                // 125
			});                                                                                                               // 126
		}                                                                                                                  // 127
                                                                                                                     //
		return submitJsSignup;                                                                                             // 74
	}()                                                                                                                 // 74
});                                                                                                                  // 74
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

}],"app_main.js":["./app_main.html","./app_main.css","../css/form.css","../components/comp_header/header.js","../components/comp_auth/auth.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/layouts/app_main.js                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.import('./app_main.html');module.import('./app_main.css');module.import('../css/form.css');module.import('../components/comp_header/header.js');module.import('../components/comp_auth/auth.js');
                                                                                                                     // 2
                                                                                                                     //
                                                                                                                     // 4
                                                                                                                     //
                                                                                                                     // 6
                                                                                                                     // 7
                                                                                                                     //
Template.App_main.onCreated(function () {                                                                            // 9
	function app_mainCreate() {                                                                                         // 9
		var handle = Meteor.subscribe('user.details');                                                                     // 10
                                                                                                                     //
		Tracker.autorun(function () {                                                                                      // 12
			var isReady = handle.ready();                                                                                     // 13
			console.log('Handle is ' + (isReady ? 'ready' : 'not ready'));                                                    // 14
		});                                                                                                                // 15
	}                                                                                                                   // 16
                                                                                                                     //
	return app_mainCreate;                                                                                              // 9
}());                                                                                                                // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"css":{"form.css":["meteor/modules",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/css/form.css                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("meteor/modules").addStyles(                                                                // 1
  ".form-main-style{\n    font: 95% Arial, Helvetica, sans-serif;\n    max-width: 400px;\n    margin: 10px auto;\n    padding: 16px;\n    background: #F7F7F7;\n}\n.form-main-style h1{\n    background: #43D1AF;\n    padding: 20px 0;\n    font-size: 140%;\n    font-weight: 300;\n    text-align: center;\n    color: #fff;\n    margin: -16px -16px 16px -16px;\n}\n.form-main-style input[type=\"text\"],\n.form-main-style input[type=\"date\"],\n.form-main-style input[type=\"password\"],\n.form-main-style input[type=\"datetime\"],\n.form-main-style input[type=\"email\"],\n.form-main-style input[type=\"number\"],\n.form-main-style input[type=\"search\"],\n.form-main-style input[type=\"time\"],\n.form-main-style input[type=\"url\"],\n.form-main-style textarea,\n.form-main-style select\n{\n    -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out;\n    outline: none;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    width: 100%;\n    background: #fff;\n    margin-bottom: 4%;\n    border: 1px solid #ccc;\n    padding: 3%;\n    color: #555;\n    font: 95% Arial, Helvetica, sans-serif;\n}\n.form-main-style input[type=\"text\"]:focus,\n.form-main-style input[type=\"password\"]:focus,\n.form-main-style input[type=\"date\"]:focus,\n.form-main-style input[type=\"datetime\"]:focus,\n.form-main-style input[type=\"email\"]:focus,\n.form-main-style input[type=\"number\"]:focus,\n.form-main-style input[type=\"search\"]:focus,\n.form-main-style input[type=\"time\"]:focus,\n.form-main-style input[type=\"url\"]:focus,\n.form-main-style textarea:focus,\n.form-main-style select:focus\n{\n    box-shadow: 0 0 5px #43D1AF;\n    padding: 3%;\n    border: 1px solid #43D1AF;\n}\n\n.form-main-style input[type=\"submit\"],\n.form-main-style input[type=\"button\"]{\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    width: 100%;\n    padding: 3%;\n    background: #43D1AF;\n    border-bottom: 2px solid #30C29E;\n    border-top-style: none;\n    border-right-style: none;\n    border-left-style: none;   \n    color: #fff;\n}\n.form-main-style input[type=\"submit\"]:hover,\n.form-main-style input[type=\"button\"]:hover{\n    background: #2EBC99;\n}"
);                                                                                                                   // 3
                                                                                                                     // 4
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
  action: function () {                                                                                              // 9
    function action() {                                                                                              // 9
      BlazeLayout.render("App_main", { content: "Home" });                                                           // 10
    }                                                                                                                // 11
                                                                                                                     //
    return action;                                                                                                   // 9
  }()                                                                                                                // 9
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