
'use strict';

const React = require('react');

var HelloReact = {

	init : function() {

		var Hello = React.createClass({displayName: 'Hello',
		    render: function() {
		        return React.createElement("div", null, "Hello ", this.props.name);
		    }
		});
		 
		React.render(
		    React.createElement(Hello, {name: "From React"}),
		    document.getElementById('react-component')
		);
	}
}

module.exports = HelloReact;