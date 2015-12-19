'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['./rsvp', './maps', './header'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('./rsvp'),
      require('./maps'),
      require('./header')
    );

  } else {
    root.returnExports = factory(root.rsvp, root.googleMaps, null);
  }

}(this, function (rsvp, maps, header) {

  header.init();

  rsvp.init();

  maps.init();

  return {};
  
}));
