import { Context } from "probot";
import reparteeContants from "../constants/repartee.contants";
class IssueActions {
  sendComment = async (context: Context): Promise<void> => {
    const issueComment = context.issue({
      body: reparteeContants.THANK_YOU_ISSUE,
    });
    await context.octokit.issues.createComment(issueComment);
  };
  closeOldIssue = (context: Context) => {
    console.log(context);
  };
}

export default new IssueActions();
