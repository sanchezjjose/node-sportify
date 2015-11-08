'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['./rsvp', './signup', './maps', 'react', 'react-dom', '@sanchezjjose/react-toggle-component'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('./rsvp'), 
      require('./signup'), 
      require('./maps'), 
      require('react'), 
      require('react-dom'),
      require('@sanchezjjose/react-toggle-component')
    );

  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.rsvp, root.signup, root.googleMaps, root.React, root.ReactDOM, root.ReactToggle);

  }

}(this, function (rsvp, signup, maps, React, ReactDom, reactToggle) {

  rsvp.init();

  signup.init();

  maps.init();

  var domElement = document.getElementById('react-toggle-container');

  var onStateHttpRequest = {
    url: '/rsvp/player/111111/game/111111',
    postData: { rsvp: 'in', team_id: '111111' }
  };
  
  var offStateHttpRequest = {
    url: '/rsvp/player/111111/game/111111',
    postData: { rsvp: 'out', team_id: '111111' }
  };
  
  var opts = {

    onState: { 
      buttonTextValue: 'In',
      buttonStyle: {
        backgroundColor: 'red',
        border: '3px solid red'
      }
    },

    offState: { 
      buttonTextValue: 'Out',
      buttonStyle: {
        backgroundColor: 'black',
        border: '3px solid black'
      }
    }
  };

  reactToggle.init(
    domElement, 
    onStateHttpRequest,
    offStateHttpRequest,
    opts
  );

  return {};
  
}));
