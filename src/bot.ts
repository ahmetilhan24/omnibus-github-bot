import { Probot } from "probot";
// listeners
import listeners from "./listeners";

class Bot {
  app: Probot;
  constructor(app: Probot) {
    this.app = app;
  }
  listen = () => {
    listeners(this.app);
  };
  initBot = () => {
    this.listen();
  };
}

export default Bot
