<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Quem Sou Eu</router-link></li>
          <li><router-link to="/o-que-faco">O Que Faço</router-link></li>
          <li><router-link to="/hobbies">Hobbies</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view> <!-- Carrega as seções dinamicamente -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/AppFooter.vue';

export default {
  components: {
    Footer
  }
};
</script>
<style scoped>
@import './assets/styles.css'; /* Importa o CSS global */
</style>
