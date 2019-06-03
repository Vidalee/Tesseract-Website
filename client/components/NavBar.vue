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
          <a href="/Rapport_Soutenance_Convexe_3_4.pdf" class="navbar-item">
            Rapport de Soutenance
          </a>

	  <a href="/Tesseract-Installer.exe" class="navbar-item">
	      Télécharger le jeu
	  </a>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
    <script>
$('.navbar-burger').click(function() {
  $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
});
    </script>  
</nav>
</template>

<script>
export default {}
</script>
