<template>
  <div class="b ox">
    <b-field>
      <b-autocomplete
        v-model="name"
        rounded
        :data="filteredDataArray"
        :loading="loading"
        placeholder="Chercher un joueur"
        icon="magnify"
        @select="select"
      >
        <template slot="empty">
          Aucune correspondance trouvée.
        </template>
      </b-autocomplete>
    </b-field>
  </div>
</template>

<script>
let data = require('@/data/players.json')
let loading = true
export default {
  props: {
    loading
  },
  data() {
    return {
      data,
      name: '',
      selected: null
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    }
  },
  mounted() {
    this.$axios
      .$get(this.$axios.defaults.baseURL + '/u/list')
      .then(function(response) {
        data = response
        console.log(response)
        console.log(data)
        if (loading) loading = false
      })
  },
  methods: {
    select: function(name) {
      this.$router.push('/u/' + name)
    }
  }
}
</script>

<style>
.center-div {
  font-size: 2.5em;
  color: white;
  background-color: rbga(0, 0, 0, 0.4);
  border-radius: 20px;
  position: absolute;
  margin: auto;
  height: 100px;
  width: 1000px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

b-field {
  background: rgba(0, 0, 0, 0.9) !important;
}
</style>
