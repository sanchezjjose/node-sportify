(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory('jquery');
  } else {
    root.returnExports = factory(root.jQuery);
  }
})(undefined, function ($) {

  function setSelectedOption(locator, dataAttribute) {
    $(locator).each(function () {
      if (this.value == $(this).parent().data(dataAttribute)) {
        $(this).attr('selected', true);
      };
    });
  }

  setSelectedOption('.position option', 'current-position');

  return {};
});

},{}]},{},[1])


//# sourceMappingURL=../map/js/account.bundle.js.map
