
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

  function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var mapElement = document.getElementById('map');
    var latitude = parseFloat(mapElement.dataset.latitude);
    var longitude = parseFloat(mapElement.dataset.longitude);
    var latLng = { lat: latitude, lng: longitude };

    var map = new google.maps.Map(mapElement, {
      center: latLng,
      zoom: 14
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      animation: google.maps.Animation.DROP
    });

    directionsDisplay.setMap(map);

    var onClickHandler = function() {
      var origin = document.querySelectorAll('.directions-origin input')[0].value;
      var destination = mapElement.dataset.address;

      displayRoute(directionsDisplay, directionsService, origin, destination);

      var googleMapsExternalLink = document.querySelectorAll('.directions-google-maps a')[0];
      googleMapsExternalLink.href = 'https://www.google.com/maps/dir/' + origin + '/' + destination;
    }

    document.querySelectorAll('.directions-origin button')[0].addEventListener('click', onClickHandler);
  }

  function displayRoute(directionsDisplay, directionsService, origin, destination) {

    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.TRANSIT

    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

      } else {
        window.alert('Directions request failed due to ' + status);
      }
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
