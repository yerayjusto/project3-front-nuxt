<template>
  <nuxt-link
    :to="{ params: { ...params }, name: nview }"
    style="text-decoration: none; color: inherit"
  >
    <v-card class="rounded-lg">
      <v-row class="ma-0" align="center" justify="center">
        <v-col cols="4"
          ><v-avatar  size="80" rounded>
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
  name: 'CardBeachMobile',
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