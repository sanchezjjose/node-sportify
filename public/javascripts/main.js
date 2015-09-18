'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['./rsvp', './signup'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(require('./rsvp', './signup'));

  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.rsvp, root.signup);

  }

}(this, function (rsvp, signup) {

  rsvp.init();

  signup.init();

  // Exposed public method
  return {};
  
}));
