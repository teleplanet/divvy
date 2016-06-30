import './auth.html';
import './auth.css';

import { Accounts } from 'meteor/accounts-base';
import { ReactiveVar } from 'meteor/reactive-var';


//-------------------ONCREATE--------------------------
Template.auth_signup.onCreated(function onCreated(){
	this.message = new ReactiveVar('');
});

Template.auth_signin.onCreated(function onCreated(){
	this.message = new ReactiveVar('');
});

//-------------------HELPERS----------------------------
Template.auth_signup.helpers({
	message(){
		return Template.instance().message.get();
	}
});

Template.auth_signin.helpers({
	message(){
		return Template.instance().message.get();
	}
});


//-------------------EVENTS-----------------------------
Template.comp_auth.events({
	'click .js-logout' (event, instance) {
		Meteor.logout();
	}
});

//Sign In
Template.auth_signin.events({
	'submit .js-signin' (event, instance) {
		event.preventDefault();

		const target = event.target;

		let email = target.email.value;
		let password = target.password.value;

		Meteor.loginWithPassword(email, password, (error, data) => {
			if(error)
				instance.message.set(error.reason);
		});
	}
});

//Sign Up
Template.auth_signup.events({
	'change .js-email'(event, instance){
		const email = event.target.value;

		//check if email account already exists
		Meteor.call('auth.validateEmail', email, (error, data) => {
			if(error){
				console.log(error);
			}else{
				//if true - show error: Email Account already exists
				if(data){

				}
				//false - Email validated - continue with registration
				else{

				}
			}
		});
	},	
	'submit .js-signup' (event, instance) {
		event.preventDefault();

		const target = event.target;


		let user = {
		  	email: target.email.value,
		  	password: target.password.value,
		  	profile: {
		        name: target.name.value,
		  	},
		};

		Accounts.createUser( user, ( error ) => {
		  if ( error ) {
		    instance.message.set(error.reason);
		  } else {
		   /* Meteor.call( 'sendVerificationLink', ( error, response ) => {
		      if ( error ) {
		        Bert.alert( error.reason, 'danger' );
		      } else {
		        Bert.alert( 'Welcome!', 'success' );
		      }
		    });*/
		  }
		});
	}
});