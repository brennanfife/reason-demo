// Entry point

[@bs.val] external document: Js.t({..}) = "document"; // Global Value, which compile to JS
let style = document##createElement("style"); //Use ## to access a field
document##head##appendChild(style);
style##innerHTML #= GlobalStyle.style; //set the style

ReactDOMRe.renderToElementWithId(<App />, "root");