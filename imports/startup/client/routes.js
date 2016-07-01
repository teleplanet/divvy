import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app_main.js'
import '../../ui/pages/home/home.js';


FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("App_main", {content: "Home"});
  }
});