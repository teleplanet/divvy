import './app_main.html';
import './app_main.css';
import '../components/comp_header/header.js';
import '../components/comp_auth/auth.js';

Template.App_main.onCreated(function app_mainCreate(){
	const handle = Meteor.subscribe('user.details');
	
	Tracker.autorun(() => {
	  const isReady = handle.ready();
	  console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);  
	});
});