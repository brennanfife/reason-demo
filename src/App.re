[@react.component]
let make = () => {
  let (repoData, setRepoData) = React.useState(() => None);

  //0 for 0 dependencies
  //Js.Promise.resolve when using bs-fetch:
  React.useEffect0(() => {
    RepoData.fetchRepos()
    // Pizza operator, allows us to run one after another
    |> Js.Promise.then_(repoData => {
         // from the use hook above...
         setRepoData(_prev => Some(repoData));
         Js.Promise.resolve();
       })
    |> Js.Promise.catch(err => {
         // '++' means string concatenation
         Js.log("An error occurred: " ++ Js.String.make(err));
         Js.Promise.resolve();
       })
    |> ignore;
    None;
  });

  let repoItems =
    switch (repoData) {
    | Some(repos) =>
      ReasonReact.array(
        Array.map(
          (repo: RepoData.repo) => <RepoItem key={repo.full_name} repo />,
          repos,
        ),
      )
    | None => React.string("Loading")
    };

  module Styles = {
    open Css;
    let title = style([textAlign(center), color(white)]);
  };

  <>
    <h1 className=Styles.title> {ReasonReact.string("Gatsby Activity")} </h1>
    repoItems
  </>;
};