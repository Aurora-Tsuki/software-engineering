import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'virtual:svg-icons-register';
import App from './App.vue';
import globalComponent from './components/index';
import router from './router/index.js';
import store from './store/index.js';
import '@/styles/index.scss';

const app = createApp(App);
// 注册element-plus，并将默认支持语言设置为中文
app.use(ElementPlus, {
    locale: zhCn
});
app.use(globalComponent);
app.use(router);
app.use(store);
// 注册element-plus中所有的icon组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.mount('#app');
