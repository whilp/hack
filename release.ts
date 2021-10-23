import { getOctokit } from "https://esm.sh/@actions/github";

const env = Deno.env.toObject();

const sha: string = env.GITHUB_SHA;
const githubRepository: string = env.GITHUB_REPOSITORY;
var repo,
  owner = githubRepository.split("/", 2);

const github = getOctokit(env.GITHUB_TOKEN);

const createReleaseResponse = await github.rest.repos.createRelease({
  owner,
  repo,
  tag_name: "test",
  name: "test",
  body: "test",
  draft: true,
  prerelease: true,
  target_commitish: sha,
});
