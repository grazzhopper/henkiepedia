  Meteor.publish('alluitspraken', function uitsprakenPublication() {
    return Uitspraken.find();
  });