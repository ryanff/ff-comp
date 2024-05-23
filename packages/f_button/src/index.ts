import type { App } from "vue";
import { FButton } from "./button";

FButton.install = (app: App) => {
  app.component("FButton", FButton);
};

export default FButton;
