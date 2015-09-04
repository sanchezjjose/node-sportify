
'use strict';

const React = require('react');

var Game = {

	init : function(next_game) {

		var NextGame = React.createClass({displayName: 'Next Game',
	    render: function() {
	      return React.createElement("div", null, "Next Game: ", this.props.name);
	    }
		});
		 
		React.render(
	    React.createElement(NextGame, {name: next_game}),
	    document.getElementById('container')
		);
	}
}

module.exports = Game;