'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['./rsvp', './maps'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('./rsvp'),
      require('./maps')
    );

  } else {
    root.returnExports = factory(root.rsvp, root.googleMaps);
  }

}(this, function (rsvp, maps) {

  rsvp.init();

  maps.init();

  return {};
  
}));
