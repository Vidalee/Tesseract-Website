<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="section">
        <Search :data="players" />
        <Profile :json="summoner" />
      </div>
    </div>
  </div>
</template>



<script>
import NavBar from '~/components/NavBar'
import Search from '~/components/Search'
import Profile from '~/components/user/Profile'

export default {
  validate({ params }) {
    return params.user !== undefined
  },

  components: {
    NavBar,
    Search,
    Profile
  },
  data: function() {
    return {
      summoner: {},
      players: []
    }
  },
  async asyncData({ app, store, params }) {
    const searchRes = await app.$axios.get(
      app.$axios.defaults.baseURL + '/u/list'
    )
    const userRes = await app.$axios.get(
      app.$axios.defaults.baseURL + '/u/by-name/' + params.user
    )
    return {
      players: searchRes.data,
      summoner: userRes.data
    }
  }
}
</script>
