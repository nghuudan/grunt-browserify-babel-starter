import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import store from './store';

export default new Vue({
  el: '#app',
  render: (createElem) => createElem(App),
  router,
  store
});
