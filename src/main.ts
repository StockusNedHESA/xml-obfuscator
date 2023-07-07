import { createApp } from "vue";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

import { vue3Debounce } from "vue-debounce";

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import App from "./App.vue";
import "./style.css";

const app = createApp(App);

app.component('v-select', vSelect)
app.use(ToastPlugin);
app.directive("debounce", vue3Debounce({ lock: true }));
app.mount("#app");
