import Vue, { VNode } from 'vue'
declare global {
  namespace JSX {
    type Element = VNode
    interface ElementAttributesProperty {
      $props: any // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
