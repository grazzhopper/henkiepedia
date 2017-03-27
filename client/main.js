import { Template }
from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.autorun(() => {
    this.subscribe('uitpraken');
  });
});



Template.hello.events({
  // events go here

});


Template.hello.helpers({

  uitspraken: function() {
    return Uitspraken.find();
  },
  settings: function() {
    return {
      rowsPerPage: 5,
      showFilter: true,
      fields: [
        { key:'uitspraak', label: 'Uitspraken', cellClass: 'col-md-2'},
        { key:'uitleg', label: 'Wat we denken dat de betekenis is'}
      ]
    };
  }

});