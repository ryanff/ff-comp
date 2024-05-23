import { defineComponent } from "vue";
import $style from "./tag.module.scss";

const FTag = defineComponent({
  name: "FTag",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
  render() {
    return <div class={$style.danger}>{this.text}</div>;
  },
});

export { FTag };
