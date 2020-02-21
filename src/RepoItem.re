module Styles = {
  open Css;
  let section =
    style([
      backgroundColor(ghostwhite),
      padding(rem(1.5)),
      borderBottom(px(1), solid, gray),
    ]);
  let title = style([textAlign(center)]);
  let paragraph = style([textAlign(center)]);
  let icons =
    style([display(flexBox), alignItems(stretch), justifyContent(center)]);
};

[@react.component]
let make = (~repo: RepoData.repo) =>
  <div className=Styles.section>
    <div className=Styles.title>
      <h1>
        <a href={repo.html_url}> {ReasonReact.string(repo.full_name)} </a>
      </h1>
    </div>
    <div className=Styles.paragraph>
      <p> <em> {ReasonReact.string(repo.description)} </em> </p>
    </div>
    // change string to int
    <span className=Styles.icons>
      <strong>
        {ReasonReact.string(
           string_of_int(repo.stargazers_count) ++ {js| ⭐|js},
         )}
        {ReasonReact.string(" | ")}
        {ReasonReact.string(string_of_int(repo.forks) ++ {js| 🔱|js})}
        {ReasonReact.string(" | ")}
        {ReasonReact.string(string_of_int(repo.watchers) ++ {js| 👀|js})}
      </strong>
    </span>
  </div>;