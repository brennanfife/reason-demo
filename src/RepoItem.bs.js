'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");

var section = Css.style(/* :: */[
      Css.backgroundColor(Css.ghostwhite),
      /* :: */[
        Css.padding(Css.rem(1.5)),
        /* :: */[
          Css.borderBottom(Css.px(1), Css.solid, Css.gray),
          /* [] */0
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* [] */0
    ]);

var paragraph = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* [] */0
    ]);

var icons = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.alignItems(Css.stretch),
        /* :: */[
          Css.justifyContent(Css.center),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  section: section,
  title: title,
  paragraph: paragraph,
  icons: icons
};

function RepoItem(Props) {
  var repo = Props.repo;
  return React.createElement("div", {
              className: section
            }, React.createElement("div", {
                  className: title
                }, React.createElement("h1", undefined, React.createElement("a", {
                          href: repo.html_url
                        }, repo.full_name))), React.createElement("div", {
                  className: paragraph
                }, React.createElement("p", undefined, React.createElement("em", undefined, repo.description))), React.createElement("span", {
                  className: icons
                }, React.createElement("strong", undefined, String(repo.stargazers_count) + " ⭐", " | ", String(repo.forks) + " 🔱", " | ", String(repo.watchers) + " 👀")));
}

var make = RepoItem;

exports.Styles = Styles;
exports.make = make;
/* section Not a pure module */
