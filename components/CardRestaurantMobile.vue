<template>
  <nuxt-link
    :to="{ params: { ...params }, name: nview }"
    style="text-decoration: none; color: inherit"
  >
    <v-card class="rounded-lg" height="auto">
      <v-row class="ma-0" align="center" justify="center">
        <v-col cols="4"
          ><v-avatar class="ma-3" size="80" rounded>
            <v-img :src="require(`@/assets/${image}`)"></v-img> </v-avatar
        ></v-col>
        <v-col cols="8"
          ><v-card-title style="word-break: normal">{{ name }}</v-card-title>
        </v-col>
      </v-row>
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
      if (this.$route.name === 'search-rest-2')
        params.establishmentType = this.name
      if (this.$route.name === 'search-rest-3') params.cuisine = this.name
      if (this.$route.name === 'search-rest-4') params.price = this.name

      return { ...this.$route.params, ...params }
    },
  },
}
</script>