import { createApp } from "vue";
import "normalize.css";
import router from "./router";
import pinia from "./store";
import App from "./App.vue";
import "@/assets/css/reset.css";

createApp(App).use(router).use(pinia).mount("#app");
