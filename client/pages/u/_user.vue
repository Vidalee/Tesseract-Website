<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="section">
        <Search />
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
      summoner: {
        iconId: '1114',
        name: 'Vivi'
      }
    }
  }
}
</script>
