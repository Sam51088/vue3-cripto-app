import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
