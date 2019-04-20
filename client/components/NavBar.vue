<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="/logo.png" alt="Logo">
          TESSERACT
        </nuxt-link>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item is-active">
            Accueil
          </nuxt-link>
          <!--a class="navbar-item">
            Classement
          </a>
          <a class="navbar-item">
            Télécharger le jeu
          </a-->
          <nuxt-link to="/register" class="navbar-item">
            Créer un compte
          </nuxt-link>
          <!--div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Compte
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Profil
              </a>
              <a class="navbar-item">
                Paramètres
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Se déconnecter
              </div>
            </div>
          </div-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
