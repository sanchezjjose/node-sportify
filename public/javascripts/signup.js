
'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(require('jquery'));

  } else {
    // Browser globals (root is window)
    root.signup = factory(root.jQuery);

  }

}(this, function ($) {

  function setSelectedOption(locator, dataAttribute) {
    $(locator).each(function() { 
      if (this.value == $(this).parent().data(dataAttribute)) {
        $(this).attr('selected', true) 
      }; 
    });
  }

  function init() {

    setSelectedOption('.position option', 'current-position');
  }

  // Exposed public method
  return {
    init : init
  };

}));
