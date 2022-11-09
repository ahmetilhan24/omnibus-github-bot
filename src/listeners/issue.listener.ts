import { Probot } from "probot";
import issueActions from "../actions/issue.actions";
class IssueListener {
  app: Probot;
  constructor(app: Probot) {
    this.app = app;
    this.init();
  }
  init = (): void => {
    this.app.on("issues.opened", issueActions.sendComment);
    this.app.on("issue_comment.created", issueActions.closeOldIssue);
  };
}

export default IssueListener;
