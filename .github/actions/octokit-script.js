const octokit = new (require('@octokit/action'))();
await octokit.issues.removeLabels({
  owner: context.repo.owner,
  repo: context.repo.repo,
  issue_number: context.issue.number,
});
