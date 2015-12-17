'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));

  } else {
    root.returnExports = factory(root.jQuery);
  }

}(this, function ($) {

  function setSelectedOption(locator, dataAttribute) {
    $(locator).each(function() { 
      if (this.value == $(this).parent().data(dataAttribute)) {
        $(this).attr('selected', true) 
      }; 
    });
  }

  setSelectedOption('.position option', 'current-position');

  return {};
  
}));
