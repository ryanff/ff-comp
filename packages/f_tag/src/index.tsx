import {defineComponent} from 'vue'

const FTag = defineComponent({
    name: 'FTag',
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    setup() {
        return {}
    },
    render() {
        return <div>{this.text}</div>
    }
})

export {
    FTag
}