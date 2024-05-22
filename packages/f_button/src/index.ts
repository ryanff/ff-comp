import type { App } from "vue";
import FButton from "./index.vue";

FButton.install = (app: App) => {
  app.component("FButton", FButton);
};

export default FButton;