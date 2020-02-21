type repo = {
  full_name: string,
  stargazers_count: int,
  html_url: string,
  description: string,
  forks: int,
  watchers: int,
};

let parseRepoJson = json =>
  Json.Decode.{
    full_name: field("full_name", string, json),
    stargazers_count: field("stargazers_count", int, json),
    html_url: field("html_url", string, json),
    description: field("description", string, json),
    forks: field("forks", int, json),
    watchers: field("watchers", int, json),
  };

let parseReposResponseJson = json =>
  Json.Decode.(field("items", array(parseRepoJson), json));

let reposUrl = "https://api.github.com/search/repositories?q=gatsby";

let fetchRepos = () =>
  Js.Promise.(
    Bs_fetch.fetch(reposUrl)
    |> then_(Bs_fetch.Response.text)
    |> then_(jsonText =>
         resolve(parseReposResponseJson(Js.Json.parseExn(jsonText)))
       )
  );