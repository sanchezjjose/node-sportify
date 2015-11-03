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

  reactToggle.init('react-toggle-container');

  // Exposed public method
  return {};
  
}));
