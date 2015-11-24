'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['./rsvp', './signup', './maps'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('./rsvp'), 
      require('./signup'), 
      require('./maps')
    );

  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.rsvp, root.signup, root.googleMaps);
  }

}(this, function (rsvp, signup, maps) {

  rsvp.init();

  signup.init();

  maps.init();

  return {};
  
}));
