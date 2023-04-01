import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const root = createApp(App);
root.mount("#app");
root.config.errorHandler = (err) => {
  console.log(err);
};
