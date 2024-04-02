import type { App } from 'vue';
import Spotlight from 'spotlight-vue';
import VueWriter from "vue-writer";

export default (app: App) => {
  app.use(VueWriter);
};