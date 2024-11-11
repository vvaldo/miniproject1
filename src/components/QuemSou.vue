<template>
  <section id="quem-sou-eu">
    <div class="foto">
      <img src="@/assets/foto.jpg" alt="Minha Foto" />
    </div>
    <h2>Quem Sou Eu?</h2>
    <p>Sou Osvaldo Pedro Simone, um profissional moçambicano de TI e Administração de Software, com 32 anos e habilidades avançadas em Português e bom domínio do Inglês, além de proficiência em cinco línguas locais. possuo experiência em tecnologias de informação e possui uma licença de condução C1, que permite a condução de veículos de grande porte. Além de ser comprometido e proativo, Osvaldo demonstra excelente capacidade de adaptação e comunicação multicultural, essencial em ambientes diversos. Ele está disponível para contato por celular, e-mail e Skype, com facilidade para deslocamento e dedicação integral ao seu desenvolvimento profissional.</p>
  </section>
</template>

<script>
export default {
  name: "QuemSou",
};
</script>

<style scoped>
#quem-sou-eu {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.foto {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border-color: #000;
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  color: #555;
}
</style>