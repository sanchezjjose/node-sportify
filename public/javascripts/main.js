
'use strict';

var g5Component = require('g5-component');

function onLoad() {

  console.log("Initting main");

  var linescoreComponent = g5Component({
      container: document.querySelector('.g5-component-linescore'),
      css: 'linescore linescore--game',
      interval: 0,
      path: '/javascripts/linescore.json'
  });

  linescoreComponent.init();

  console.log("Linescore Component Init Successful!");
}

window.onload = onLoad;
