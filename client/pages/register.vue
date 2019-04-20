<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="section">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>



<script>
import NavBar from '~/components/NavBar'
import RegisterForm from '~/components/register/RegisterForm'

export default {
  components: {
    NavBar,
    RegisterForm
  },
  data: function() {
    return {
      summoner: {
        iconId: '1114',
        name: 'Vivi'
      }
    }
  },
  asyncData({ app, store }) {
    return app.$axios
      .request({ url: app.$axios.defaults.baseURL + '/u/list', method: 'GET' })
      .then(res => {
        return { players: res.data }
      })
  }
}
</script>
