import Vue from 'vue';
import Router from 'vue-router';

// Importando as páginas/componentes
import QuemSou from './components/QuemSou.vue';
import OQueFaco from './components/OQueFaco.vue';
import AppHobbies from './components/AppHobbies.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuemSou // Página inicial (Quem Sou Eu?)
    },
    {
      path: '/o-que-faco',
      name: 'o-que-faco',
      component: OQueFaco // Página "O que faço?"
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: AppHobbies // Página "Hobbies"
    }
  ]
});
