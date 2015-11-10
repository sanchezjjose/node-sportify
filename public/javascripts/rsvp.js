
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
    root.rsvp = factory(root.jQuery, root.React, root.ReactDOM, root.ReactToggle);

  }

}(this, function ($, React, ReactDom, reactToggle) {

  function init() {

    var domElement = document.getElementById('react-toggle-component'),
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
        buttonTextValue: 'In',
        buttonStyle: {
          backgroundColor: '#4b758b',
          border: '1px solid #5788a1',
          color: '#eee'
        }
      },

      offState: { 
        buttonTextValue: 'Out',
        buttonStyle: {
          backgroundColor: '#e0e0e0',
          border: '1px solid #cccccc',
          color: '#505050'
        }
      }
    };

    function callback(data) {
      document.location.reload(false);
    }

    reactToggle.init(
      domElement, 
      callback,
      onStateHttpRequest,
      offStateHttpRequest,
      opts
    );
  }

  return {
    init : init
  };

}));
