
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
    root.rsvp = factory(root.jQuery);

  }

}(this, function ($) {

  function init() {
    console.log("Initializing RSVP Module...");

    $('h1:first-child').before('<div class="message alert alert-info">TEST</div>');

    // $.ajax({
    //   url: $(this).attr('href'),

    //   success: function (data) {
        
    //     if (data.status === 'in') {
    //       $('h1:first-child').before('<div class="message alert alert-info">'+data.msg+'</div>');
        
    //     } else {
    //       $('h1:first-child').before('<div class="message alert alert-danger" >'+data.msg+'</div>');
    //     }
    //   }
    // });
  }

  // Exposed public method
  return {
    init : init
  };

}));
