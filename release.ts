import { getOctokit, context } from "https://esm.sh/@actions/github";

const env = Deno.env.toObject();
const github = getOctokit(env.GITHUB_TOKEN);
const { owner: currentOwner, repo: currentRepo } = context.repo;

console.log(env);

const createReleaseResponse = await github.repos.createRelease({
  owner,
  report,
  tag_name: "test",
  name: "test",
  body: "test",
  draft: true,
  prerelease: true,
  target_commitish: context.sha,
});
