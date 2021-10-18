import { getOctokit, context } from "https://esm.sh/@actions/github";

const github = getOctokit(context.github.token);
const { owner: currentOwner, repo: currentRepo } = context.repo;

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
