import type { App } from "vue";
import { FTag } from "./tag";

FTag.install = (app: App) => {
  app.component("FTag", FTag);
};

export default FTag;
