<template>
  <div class="box">
    <b-field>
      <b-autocomplete
        v-model="name"
        rounded
        :data="filteredDataArray"
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
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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
