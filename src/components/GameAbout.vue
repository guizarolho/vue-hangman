<template>
  <div class="bio__wrapper">
    <nav class="bio__nav">
      <RouterLink to="/" class="bio__back-link"> <span class="arrow">←</span>Voltar </RouterLink>
    </nav>

    <main class="main__container">
      <div class="bio__card">
        <div class="image__container">
          <img src="../assets/biopic.jpg" alt="Guilherme Mendes Fontes" />
        </div>

        <div class="title__container">
          <h1>Olá!</h1>
        </div>

        <div class="content__container">
          <p class="content">
            O <strong>Hang</strong> foi criado em Junho de 2026 por mim,
            <span>Guilherme Mendes Fontes</span>. A lista de palavras utilizadas nos jogos vem do
            léxico pt-br, que está disponível através da licença MIT.
          </p>
        </div>

        <hr class="divider" />

        <div class="disclaimer__container">
          <h3 class="disclaimer__title">Termos de Privacidade</h3>
          <p class="disclaimer">
            O Hang é totalmente focado em privacidade: não utiliza cookies e não faz nenhum tipo de
            tracking de dados.
          </p>
        </div>

        <footer class="footer__container">
          <span class="copyright">
            Copyright © 2026 Guilherme Mendes Fontes.<br />Todos os direitos reservados.
          </span>
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.bio__wrapper {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--bg-primary);
  font-family: sans-serif;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}

.bio__nav {
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
}

.bio__back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;
  width: auto;
}

.bio__back-link:hover {
  color: var(--text-primary);
}

.bio__back-link .arrow {
  width: auto;
  height: auto;
  display: inline-block;
}

.main__container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px 40px 16px;
}

.bio__card {
  background: var(--color-white);
  width: 100%;
  max-width: 440px;
  padding: 40px 32px;
  border-radius: 24px;
  box-shadow:
    0 10px 25px -5px var(--box-shadow-primary),
    0 8px 10px -6px var(--box-shadow-secondary);
  text-align: center;
}

.image__container {
  width: 96px;
  height: 96px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--box-shadow-primary);
  background-color: var(--bg-secondary);
}

.image__container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title__container h1 {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.content__container .content {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;
}

.content__container .content strong {
  color: var(--color-success-light);
}

.content__container .content span {
  font-weight: 600;
  color: var(--text-primary);
}

.divider {
  border: none;
  border-top: 1px solid var(--bg-outline);
  margin: 28px 0;
}

.disclaimer__container {
  background-color: var(--bg-primary);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 28px;
}

.disclaimer__title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  margin: 0 0 6px 0;
  font-weight: 700;
}

.disclaimer {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.footer__container .copyright {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}
</style>
