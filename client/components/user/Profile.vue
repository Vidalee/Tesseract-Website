<template>
  <article class="tile is-child notification infos">
    <div class="profile-banner">
      <br><br><br><br><br>
      <h1 class="title is-1">
        {{ json.username }}
        <br>
        <span v-if="json.authority === 7" class="tag is-primary">
          Admin
        </span>
        <span v-if="json.authority === 3" class="tag is-dark">
          Moderator
        </span>
        <span v-if="json.online" class="tag is-success">
          Online
        </span>
        <span v-else class="tag is-light">
          Offline
        </span>
      </h1>
    </div>
    <div class="rounded profile-icon-background" style="background-color: white">
      <img class="rounded profile-icon" :src="getIconPath()">
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </article>
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
    getIconPath: function() {
      const str =
        'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/' +
        23 +
        '.png'
      return str
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
          content: 'Profil de ' + this.json.username
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

<style>
.rounded {
  border-radius: 50%;
}

.infos {
  background-color: rgba(0, 0, 0, 0);
}
.profile-icon-background {
  height: 200px;
  width: 200px;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-icon {
  height: 190px;
  width: 190px;
}

.profile-banner {
  height: 80%;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  margin: auto;
  right: 0;
  top: 100px;
  left: 0;
  text-align: center;
}
</style>
