import { Probot } from "probot";
// listeners
import listeners from "./listeners";

class Bot {
  app: Probot;
  constructor(app: Probot) {
    this.app = app;
  }
  listen = (): void => {
    listeners(this.app);
  };
  init = (): void => {
    this.listen();
  };
}

export default Bot;
