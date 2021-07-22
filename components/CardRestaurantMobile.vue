<template>
  <nuxt-link
    :to="{ params: { ...params }, name: nview }"
    style="text-decoration: none; color: inherit"
  >
    <v-card class="rounded" height="100">
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="80" tile>
          <v-img :src="require(`@/assets/${image}`)"></v-img>
        </v-avatar>
        <div
          class="d-flex"
          style="text-align: justify; text-justify: inter-word"
        >
          <v-card-title style="word-break: normal">{{ name }}</v-card-title>
        </div>
      </div>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardRestaurantMobile',
  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    nview: {
      type: String,
      default: '',
    },
  },
  computed: {
    params() {
      const params = { placeType: 'restaurants' }
      if (this.$route.name === 'search-rest-1') params.island = this.name
      if (this.$route.name === 'search-rest-2') params.sandType = this.name
      if (this.$route.name === 'search-rest-3') params.size = this.name
      if (this.$route.name === 'search-rest-4') params.surge = this.name
      return { ...this.$route.params, ...params }
    },
  },
}
</script>