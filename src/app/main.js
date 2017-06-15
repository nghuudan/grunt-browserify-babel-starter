import Vue from 'vue';
import router from './router';
import App from './components/App.vue';

export default new Vue({
  el: '#app',
  router,
  render: (createElem) => createElem(App)
});
