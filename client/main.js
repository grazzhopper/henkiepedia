import { Template }
from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.autorun(() => {
    this.subscribe('alluitspraken');
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
        { key:'image', label: 'Image', headerClass: 'h6', tmpl: Template.imagehelper, sortable: false},
        { key:'uitspraak', label: 'Uitspraken', cellClass: 'col-md-2 h6', headerClass: 'h6'},
        { key:'uitleg', label: 'Wat we denken dat de betekenis is', headerClass: 'h6', cellClass: 'h6'}
      ]
    };
  }

});

Template.body.events({
    'click .donatie' : function (){
      alert ("1 april!! HahahaHenk.");
  }
});
