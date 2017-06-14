import Vue from 'vue';
import App from './components/App.vue';

export default new Vue({
  el: '#app',
  render: (createElem) => createElem(App, {
    props: {
      appTitle: 'App Works!'
    }
  })
});
