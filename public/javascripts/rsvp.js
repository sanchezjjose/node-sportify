
'use strict';

var Rsvp = {

  init : function($) {

    $('.rsvp a').click(function(ev) {
      ev.preventDefault();

      console.log(this.className);
    });
  }
}

module.exports = Rsvp;
