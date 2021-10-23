import { getOctokit } from "https://esm.sh/@actions/github";

const env = Deno.env.toObject();

const github = getOctokit(env.GITHUB_TOKEN);

const githubRepository: string = env.GITHUB_REPOSITORY;
var repo,
  owner = githubRepository.split("/", 1);

const createReleaseResponse = await github.repos.createRelease({
  owner,
  repo,
  tag_name: "test",
  name: "test",
  body: "test",
  draft: true,
  prerelease: true,
  target_commitish: context.sha,
});
