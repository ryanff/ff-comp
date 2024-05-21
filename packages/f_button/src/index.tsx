import {defineComponent, type PropType} from 'vue'
import $style from './index.module.scss'

const FButton = defineComponent({
    name: 'FButton',
    props: {
        type: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary'
        }
    },
    setup() {
        return {}
    },
    render() {
        return <button class={['f-button', $style[this.type]]}>
            {this.$slots.default ? this.$slots.default() : null}
        </button>
    }
})

export {
    FButton
}