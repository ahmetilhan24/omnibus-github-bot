import { Probot } from "probot";
import issueActions from "../actions/issue.actions";

class IssueListener {
  app: Probot;
  constructor(app: Probot) {
    this.app = app;
    this.initListener();
  }
  initListener = (): void => {
    this.app.on("issues.opened", issueActions.sendComment);
  };
}

export default IssueListener;
