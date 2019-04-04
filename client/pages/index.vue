<template>
  <div>
    <title>
      tesseract
    </title>
    <NavBar />
    <div class="container">
      <div class="section">
        <img src="tesseract.png">
        <Search />
        <!-- Developers -->
        <div class="row columns">
          <div v-for="info in devInfos" :key="info.name" class="column">
            <DevCard :json="info" />
          </div>
        </div>
        <!-- End Developers -->
        <Progression />
        <Ressources />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Search from '~/components/Search'
import DevCard from '~/components/DevCard'
import Progression from '~/components/Progression'
import Ressources from '~/components/Ressources'
const devInfos = require('@/data/devInfos.json')

export default {
  components: {
    NavBar,
    Search,
    DevCard,
    Progression,
    Ressources
  },
  data: function() {
    return {
      devInfos
    }
  },
  head() {
    return {
      title: 'Tesseract',
      meta: [
        {
          hid: 'title',
          name: 'og:title',
          content: 'Tesseract'
        },
        {
          hid: 'description',
          name: 'og:description',
          content: 'Rogue-like vraiment super !!'
        },
        {
          hid: 'image',
          name: 'og:image',
          content: 'http://tesseract-game.net/logo.png'
        }
      ]
    }
  }
}
</script>
