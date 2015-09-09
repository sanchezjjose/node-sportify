
'use strict';

// var sportifyClient = require('sportify');

var Rsvp = {

  init : function($) {

    $.ajax({
        url: "http://localhost:9000/team/111111/game/rsvp?status=in&game_id=111111",

        success: function (data) {
          
          if (data.status === 'in') {
            $('h1:first-child').before('<div class="message alert alert-info">'+data.msg+'</div>');
          
          } else {
            $('h1:first-child').before('<div class="message alert alert-danger" >'+data.msg+'</div>');
          }
        }
    });
  }
}

module.exports = Rsvp;
