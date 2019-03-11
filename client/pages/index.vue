<template>
  <section class="hero is-info is-fullheight">
    <Header />
    <Search />
  </section>
</template>

<script>
import Header from '~/components/Header'
import Search from '~/components/Search'

export default {
  components: {
    Header,
    Search
  }
}
</script>

<style>
.hero.is-info {
  background: #151b27;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
}
</style>
