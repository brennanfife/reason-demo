'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function parseRepoJson(json) {
  return {
          full_name: Json_decode.field("full_name", Json_decode.string, json),
          stargazers_count: Json_decode.field("stargazers_count", Json_decode.$$int, json),
          html_url: Json_decode.field("html_url", Json_decode.string, json),
          description: Json_decode.field("description", Json_decode.string, json),
          forks: Json_decode.field("forks", Json_decode.$$int, json),
          watchers: Json_decode.field("watchers", Json_decode.$$int, json)
        };
}

function parseReposResponseJson(json) {
  return Json_decode.field("items", (function (param) {
                return Json_decode.array(parseRepoJson, param);
              }), json);
}

var reposUrl = "https://api.github.com/search/repositories?q=gatsby";

function fetchRepos(param) {
  return fetch(reposUrl).then((function (prim) {
                  return prim.text();
                })).then((function (jsonText) {
                return Promise.resolve(parseReposResponseJson(JSON.parse(jsonText)));
              }));
}

exports.parseRepoJson = parseRepoJson;
exports.parseReposResponseJson = parseReposResponseJson;
exports.reposUrl = reposUrl;
exports.fetchRepos = fetchRepos;
/* No side effect */
