import * as vscode from "https://cdn.skypack.dev/@actions/github?dts";

const env = Deno.env.toObject();
const github = new GitHub(env.GITHUB_TOKEN);