var GitHub = GitHub || {};
GitHub.CommitBadge = GitHub.CommitBadge || {};

GitHub.CommitBadge.loadData = function(commitMessages, targetElement, limit) {
  targetElement.addClass('github-commit-badge-container');
  var template = $.template(
    '<div class="github-commit-badge-outline">' +
      '<a href="${projectUrl}" class="github-commit-badge-username">${projectName}</a>' +
      '<img src="${gravatar}" class="github-commit-badge-gravatar">' +
    '</div>');

  for (var i=0; i < commitMessages.commits.length && i < limit; i++) {
    var commit = commitMessages.commits[i];
    var projectMatch = commit.url.match(/github.com\/([^\/]+)\/([^\/]+)\/commit\//);
    targetElement.append(template, {
      projectUrl: commit.url.match(/(.*)\/commit\//)[1],
      committer: projectMatch[1],
      projectName: projectMatch[2],
      gravatar: "http://www.gravatar.com/avatar/" + hex_md5(commit.committer.email) + "?s=60"
    });
  };
};