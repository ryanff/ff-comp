import type { App, Plugin } from "vue";
import button from "./index.vue";
import { ButtonProps } from "./type";

type SFCWithInstall<T> = T&Plugin


// button.install = (app: App) => {
//   app.component("FButton", FButton);
// };



const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name, comp as any)
    }
    return comp as SFCWithInstall<T>
}
const FButton = withInstall<ButtonProps>(button)

export default FButton;