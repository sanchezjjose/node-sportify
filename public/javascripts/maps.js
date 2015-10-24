
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

  var GOOGLE_MAPS_API_BROWSER_KEY = 'AIzaSyAe9xxu11QhrhOX_8EymymNWnu3clXTvRY';

  // TODO: why is this defined outside?
  var map;
  function initMap() {
    var mapElement = document.getElementById('map'),
        latitude = parseFloat(mapElement.dataset.latitude),
        longitude = parseFloat(mapElement.dataset.longitude);

    map = new google.maps.Map(mapElement, {
      center: {lat: latitude, lng: longitude},
      zoom: 14
    });
  }

  function init() {
    window.initMap = initMap;

    // By default this is loading asynchronously
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_BROWSER_KEY + "&callback=initMap";
    document.body.appendChild(script);
  }

  // Exposed public method
  return {
    init : init
  };

}));
