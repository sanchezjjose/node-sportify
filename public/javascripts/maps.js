
'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory();

  } else {
    // Browser globals (root is window)
    root.googleMaps = factory();

  }

}(this, function () {

  // TODO: why is this defined outside?
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  function init() {

    // TODO: move to a config file
    var googleMapsAPIKey = "AIzaSyAe9xxu11QhrhOX_8EymymNWnu3clXTvRY";

    window.initMap = initMap;

    // By default this is loading asynchronously
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMapsAPIKey + "&callback=initMap";
    document.body.appendChild(script);
  }

  // Exposed public method
  return {
    init : init
  };

}));
