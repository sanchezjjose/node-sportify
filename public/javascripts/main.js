'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['./rsvp'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(require('./rsvp'));

  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.rsvp);

  }

}(this, function (rsvp) {

  rsvp.init();

  // Exposed public method
  return {};
  
}));
