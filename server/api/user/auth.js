// Ensuring every user has an email address, should be in server-side code
Accounts.validateNewUser((user) => {
  /*new SimpleSchema({
    _id: { type: String },
    emails: { type: Array },
    'emails.$': { type: Object },
    'emails.$.address': { type: String },
    'emails.$.verified': { type: Boolean },
    createdAt: { type: Date },
    services: { type: Object, blackbox: true }
  }).validate(user);*/

  // Return true to allow user creation to proceed
  return true;
});

Meteor.methods({
  'auth.validateEmail'(email){
    //check if email account already exists
    if (Accounts.findUserByEmail(email)) {
      //return false if email account exists
      return false;
    }else {
      //return true if email account does not exist
      return true;
    }
  },
});