Meteor.publish('user.details', function (userid) {
  // Validate the arguments to be what we expect



  // Select only the users that match the array of IDs passed in
  const selector = {
    _id: this.userId,
  };

  // Only return one field, `initials`
  const options = {
    fields: { 'profile': 1 }
  };

  return Meteor.users.find(selector, options);
});