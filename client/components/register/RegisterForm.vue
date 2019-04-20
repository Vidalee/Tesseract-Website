<template>
  <div class="box">
    <b-field v-if="taken" label="Error" type="is-danger" message="Username already taken">
      <p class="control has-icons-left">
        <b-input v-model="username" placeholder="Username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user" />
        </span>
      </p>
    </b-field>
    <b-field v-else>
      <p class="control has-icons-left">
        <b-input v-model="username" placeholder="Username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user" />
        </span>
      </p>
    </b-field>
    <b-field>
      <p class="control has-icons-left">
        <b-input v-model="password" type="password" placeholder="Password" password-reveal />
        <span class="icon is-small is-left">
          <i class="fas fa-lock" />
        </span>
      </p>
    </b-field>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="send()">
          Register
        </button>
      </p>
    </div>
  </div>
</template>

<script>
// const data = require('@/data/players.json')
export default {
  data: function() {
    return {
      taken: false,
      username: '',
      password: ''
    }
  },
  methods: {
    send: function() {
      this.$axios
        .request({
          url: this.$axios.defaults.baseURL + '/u/register',
          method: 'POST',
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(res => {
          console.log(res.data)
          if (res.data === 'Username already taken') {
            this.taken = true
          } else if (res.data === 'Success') {
            this.$router.push('/')
            this.$toast.open({
              duration: 10000,
              message:
                'Your account have been created, you can now use the client',
              type: 'is-success'
            })
          } else {
            this.$toast.open({
              duration: 10000,
              message: 'Server error :(',
              type: 'is-danger'
            })
          }
        })
    }
  }
}
</script>

<style>
</style>
