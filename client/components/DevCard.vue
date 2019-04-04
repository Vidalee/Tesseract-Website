<template>
  <div class="card large">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img :src="json.icon" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 no-padding">
            {{ json.name }}
          </p>
          <p>
            <span class="title is-6">
              @{{ json.tag }}
            </span>
          </p>
          <p class="subtitle is-6">
            {{ json.role }}
          </p>
        </div>
      </div>
      <div class="content">
        {{ json.message }}
        <div class="background-icon">
          <span class="icon-twitter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      required: true
    }
  }
}
</script>
