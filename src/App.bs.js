'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var RepoData$ReasonReactExamples = require("./RepoData.bs.js");
var RepoItem$ReasonReactExamples = require("./RepoItem.bs.js");

function App(Props) {
  var match = React.useState((function () {
          return ;
        }));
  var setRepoData = match[1];
  var repoData = match[0];
  React.useEffect((function () {
          RepoData$ReasonReactExamples.fetchRepos(/* () */0).then((function (repoData) {
                    Curry._1(setRepoData, (function (_prev) {
                            return repoData;
                          }));
                    return Promise.resolve(/* () */0);
                  })).catch((function (err) {
                  console.log("An error occurred: " + String(err));
                  return Promise.resolve(/* () */0);
                }));
          return ;
        }), ([]));
  var repoItems = repoData !== undefined ? $$Array.map((function (repo) {
            return React.createElement(RepoItem$ReasonReactExamples.make, {
                        repo: repo,
                        key: repo.full_name
                      });
          }), repoData) : "Loading";
  var title = Css.style(/* :: */[
        Css.textAlign(Css.center),
        /* :: */[
          Css.color(Css.white),
          /* [] */0
        ]
      ]);
  return React.createElement(React.Fragment, undefined, React.createElement("h1", {
                  className: title
                }, "Gatsby Activity"), repoItems);
}

var make = App;

exports.make = make;
/* Css Not a pure module */
