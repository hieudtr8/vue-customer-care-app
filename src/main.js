/* eslint-disable vue/multi-word-component-names */
import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Notifications from '@kyvg/vue3-notification'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App)
  .use(store)
  .use(Notifications)
  .use(router)
  .mount('#app');
