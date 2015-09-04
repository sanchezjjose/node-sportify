
'use strict';

const Game = require('./game');

function onLoad() {

	Game.init({ next_game : "Tomorrow!" });
}

window.onload = onLoad;