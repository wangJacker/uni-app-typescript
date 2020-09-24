import Vue from 'vue';
import uView from 'uview-ui';
import store from '@/store';
import App from './App.vue';
let vuexStore = require('@/store/$u.mixin.ts');
Vue.mixin(vuexStore);
Vue.config.productionTip = false;
Vue.use(uView);

new App({ store }).$mount();
