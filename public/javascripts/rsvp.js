
'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(require('jquery'));

  } else {
    // Browser globals (root is window)
    root.rsvp = factory(root.jQuery);

  }

}(this, function ($) {

  function init() {

    $('.next-game.rsvp a').click(function (ev) {
      ev.preventDefault();

      var url = '/rsvp/player/' + $(this).data("player-id") + '/game/' + $(this).data("game-id"),
          rsvp = $(this).data("rsvp"),
          teamId = $(this).data("team-id");

      $.post(url, { rsvp: rsvp, team_id: teamId }).done(function(data) {
        document.location.reload(false);
        
        // var content = $( data ).find( "#content" );
        // $( "#result" ).empty().append( content );
      });;
    });
  }

  // Exposed public method
  return {
    init : init
  };

}));
