// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        FButton: typeof import('@xiaojo/f_button').default;
    }
}