import { createApp } from "vue";
import { EmojiPickerPlugin } from 'vue-emoji-picker'
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(EmojiPickerPlugin).mount("#app");
