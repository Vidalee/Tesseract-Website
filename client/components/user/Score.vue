<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Le {{ timestampToDate(json.when) }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          Game finished in {{ secondsToTime(json.time) }} with the seed <strong>{{ json.seed }}</strong>
        </div>
      </div>
      <footer class="card-footer">
        <nuxt-link v-if="json.u1 != ''" :to="{ path: '/u/' + json.u1 }" class="card-footer-item">
          <img src="/archer.png" />{{ json.u1 }}
        </nuxt-link>
        <nuxt-link v-if="json.u2 != ''" :to="{ path: '/u/' + json.u2 }" class="card-footer-item">
          <img src="/assassin.png" />{{ json.u2 }}
        </nuxt-link>
        <nuxt-link v-if="json.u3 != ''" :to="{ path: '/u/' + json.u3 }" class="card-footer-item">
          <img src="/mage.png" />{{ json.u3 }}
        </nuxt-link>
        <nuxt-link v-if="json.u4 != ''" :to="{ path: '/u/' + json.u4 }" class="card-footer-item">
          <img src="/warrior.png" />{{ json.u4 }}
        </nuxt-link>
      </footer>
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      required: true
    }
  },
  methods: {
    timestampToDate: function(timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleString()
    },
    secondsToTime: function(seconds) {
      return new Date(seconds * 1000).toISOString().substr(11, 8)
    }
  }
}
</script>

<style>
</style>
