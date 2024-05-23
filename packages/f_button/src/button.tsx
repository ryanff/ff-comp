import { PropType, defineComponent } from "vue";
import $style from "./button.module.scss";

export const FButton = defineComponent({
  name: "FButton",
  props: {
    type: {
      type: String as PropType<"primary" | "danger">,
      default: "primary",
    },
  },
  setup() {
    return {};
  },
  render() {
    return (
      <button class={$style[this.type]}>
        {this.$slots.default ? this.$slots.default() : ""}
      </button>
    );
  },
});
