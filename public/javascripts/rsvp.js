
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
    console.log("Initializing RSVP Module...");

    $('.next-game.rsvp a').click(function (ev) {
      ev.preventDefault();

      console.log("CLICKED!!!");
      console.log($(this).attr("href"));

      var url = $(this).attr("href"),
          rsvpStatus = $(this).attr("data-status"),
          teamId = $(this).attr("data-team-id");

      console.log(url);
      console.log(rsvpStatus);
      console.log(teamId);

      $.post(url, { rsvp_status: rsvpStatus, team_id: teamId });

      // $.ajax({
      //   url: $(this).attr('href'),
      //   success: function (data) {
      //     $('.alert').remove();
      //     if (data.status === 'in') {
      //       $('.season:first-child').before('<div class="game-status-msg alert alert-info">'+data.msg+'</div>');
      //     } else {
      //       $('.season:first-child').before('<div class="game-status-msg alert alert-danger" >'+data.msg+'</div>');
      //       $('.game-status-msg').addClass('alert-danger');
      //     }
      //     window.scrollTo(0, 0);
      //     setTimeout(function clearMsg () {
      //       $('.alert').fadeOut('1000', function (el) {
      //           $(el).remove();
      //       });
      //     }, 5000);
      //   }
      // });
    });
  }

  // Exposed public method
  return {
    init : init
  };

}));
