'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./App.bs.js");
var GlobalStyle$ReasonReactExamples = require("./GlobalStyle.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = GlobalStyle$ReasonReactExamples.style;

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonReactExamples.make, { }), "root");

exports.style = style;
/* style Not a pure module */
