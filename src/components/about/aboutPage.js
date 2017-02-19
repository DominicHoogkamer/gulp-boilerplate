"use strict";

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    this application uses the following technoligies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Gulp</li>
                        <li>Node</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;