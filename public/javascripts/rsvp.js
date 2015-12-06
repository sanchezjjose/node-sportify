
'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'react', 'react-dom', '@sanchezjjose/react-toggle-component'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('jquery'),
      require('react'), 
      require('react-dom'),
      require('@sanchezjjose/react-toggle-component')
    );

  } else {
    // Browser globals (root is window)
    root.rsvp = factory(root.jQuery, root.React, root.ReactDOM, root.ReactToggleComponent);
  }

}(this, function ($, React, ReactDom, ReactToggleComponent) {

  function init() {

    var domElement = document.getElementById('react-toggle-component');

    if (domElement) {
      var rsvpStatus = domElement.dataset.rsvpStatus === 'true',
          playerId = domElement.dataset.playerId,
          gameId = domElement.dataset.gameId,
          teamId = domElement.dataset.teamId,
          postUrl = '/rsvp/player/' + playerId + '/game/' + gameId;

      var onStateHttpRequest = {
        url: postUrl,
        postData: { rsvp: 'in', team_id: teamId }
      };
      
      var offStateHttpRequest = {
        url: postUrl,
        postData: { rsvp: 'out', team_id: teamId }
      };
      
      var opts = {

        onState: {
          text: 'In',
          styles: {
            buttonComponent: { },
            textComponent: { },
            sliderComponent: { }
          }
        },

        offState: { 
          text: 'Out',
          styles: {
            buttonComponent: { },
            textComponent: { },
            sliderComponent: { }
          }
        }
      };

      function callback(data) {
        document.location.reload(false);
      }

      ReactToggleComponent.init(
        domElement,
        rsvpStatus,
        callback,
        onStateHttpRequest,
        offStateHttpRequest,
        opts
      );
    }
  }

  return {
    init : init
  };

}));
