'use strict';

var $ = require('jquery');

module.exports = {

  init: function() {
    
    $('.nav-button').click(function(ev) {
      ev.preventDefault();
      $('.dropdown-content').toggleClass('active');
    })
  }
};
