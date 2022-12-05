import DefaultTheme from "vitepress/theme";

// import Packages from "../packages/index";
// import Components from "../components/index"
import "../style/common.less";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册 Packages 组件
    // Object.values(Modules).map(item => {
    //   app.component(item.name, item);
    // })
    
    // 注册UI组件
    // Object.values(Components).map(item => {
    //   app.component(item.name, item)
    // })
  },
};
