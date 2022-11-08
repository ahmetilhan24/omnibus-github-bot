import { Probot } from "probot";
import IssueListener from "./issue.listener";

export default (app: Probot) => {
  new IssueListener(app);
};
