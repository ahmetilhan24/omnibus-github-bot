import { Probot } from "probot";
import Bot from "./bot";

export = (app: Probot) => {
  const bot = new Bot(app);
  bot.init();
};
