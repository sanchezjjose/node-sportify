
'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'jquery', 
      '@sanchezjjose/react-toggle-component'
    ], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('jquery'),
      require('@sanchezjjose/react-toggle-component')
    );

  } else {
    root.rsvp = factory(root.jQuery, root.ReactToggleComponent);
  }

}(this, function ($, ReactToggleComponent) {

  function init() {

    var domElement = document.getElementById('react-toggle-component');

    if (domElement) {
      var rsvpStatus = Sportify.rsvpStatus,
          playerId = Sportify.playerId,
          gameId = Sportify.nextGameId,
          teamId = Sportify.activeTeamId,
          postUrl = '/rsvp/player/' + playerId + '/game/' + gameId;

      var httpRequests = {

        onState: {
          url: postUrl,
          postData: { rsvp: 'out', team_id: teamId }
        },

        offState: {
          url: postUrl,
          postData: { rsvp: 'in', team_id: teamId }
        },
      };
      
      var opts = {

        onState: {
          text: 'IN',
          styles: {
            textComponent: {
              left: '30'
            }
          }
        },

        offState: { 
          text: 'OUT'
        }
      };

      function callback(data) {
        // var content = $(data).find(".rsvp-status");
        $(".rsvp-section").empty().append(data);
      }

      ReactToggleComponent.init(
        domElement,
        rsvpStatus,
        callback,
        httpRequests,
        opts
      );
    }
  }

  return {
    init : init
  };

}));
