import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import plugins from "./plugins";
import "@/type";
import "./scss/main.scss";
console.log(21);

const app = createApp(App)
  .use(store)
  .use(router)
plugins.forEach((plugin) => { app.use(plugin) })
app.mount("#app");
