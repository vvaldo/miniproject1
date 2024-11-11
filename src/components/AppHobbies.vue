<template>
  <section id="hobbies">
    <h2>Meus Hobbies</h2>
    <p>Osvaldo Pedro Simone tem uma paixão por jogar futsal, ler, viajar e aprender sobre novas culturas. Esses interesses refletem seu gosto por atividades físicas e intelectuais, além de sua curiosidade e abertura para experiências multiculturais</p>
    <div class="hobby-list">
      <div class="hobby">
        <i class="fas fa-book-open"></i>
        <p>Leitura</p>
      </div>
      <div class="hobby">
        <i class="fas fa-laptop-code"></i>
        <p>Programação</p>
      </div>
      <div class="hobby">
        <i class="fas fa-gamepad"></i>
        <p>Jogar Futsal</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HobbiesMe",
};
</script>
<style scoped>
#hobbies {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}

.hobby-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.hobby {
  text-align: center;
  font-size: 18px;
}

.hobby i {
  font-size: 40px;
  color: #e60000; /* Cor vermelha */
  margin-bottom: 10px;
}

.hobby p {
  font-size: 16px;
  color: #555;
}
</style>