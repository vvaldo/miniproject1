import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Importando o Vue Router
import router from './router'; // Importando o arquivo de rotas

Vue.config.productionTip = false;

// Usando o Vue Router no Vue
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router, // Passando a instância do router para a aplicação
}).$mount('#app');

