<template>
  <v-card elevation="15">
    <nuxt-link
      :to="{ params: { ...params }, name: nview }"
      style="text-decoration: none; color: inherit"
    >
      <v-card-title id="title-name" class="justify-center">{{
        name
      }}</v-card-title>
      <div class="pa-2">
        <v-img
          style="border-radius: 5px;"
          :height="$vuetify.breakpoint.sm ? '180' : '250'"
          :src="require(`@/assets/${image}`)"
        ></v-img>
      </div>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'CardBeach',
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
      const params = { placeType: 'beaches' }
      if (this.$route.name === 'search-beach-1') params.island = this.name
      if (this.$route.name === 'search-beach-2') params.sandType = this.name
      if (this.$route.name === 'search-beach-3') params.size = this.name
      if (this.$route.name === 'search-beach-4') params.surge = this.name
      return { ...this.$route.params, ...params }
    },
  },
}
</script>

<style lang="scss" scoped>
@media only screen and (min-device-width: 600px) and (max-device-width: 790px) {
  #title-name {
    font-size: 16px;
    word-break: normal;
    white-space: nowrap;
  }
}
</style>