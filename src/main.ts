import { createPinia } from 'pinia';

import 'normalize.css';
import 'virtual:svg-icons-register';

import App from './App.vue';
import router from './router';

import '@/styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
