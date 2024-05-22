import FButton from './src/index.vue';

declare module 'vue' {
    interface GlobalComponents {
        FButton: typeof FButton;
    }
}