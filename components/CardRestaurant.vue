<template>
  <v-card id="vcard" elevation="15">
    <nuxt-link
      :to="{ params: { ...params }, name: nview }"
      style="text-decoration: none; color: inherit"
    >
      <v-card-title
        id="title-name"
        class="justify-center"
        >{{ name }}</v-card-title
      >
      <div id="divcard" class="pa-2">
        <v-img
          id="imgcard"
          height="180"
          :src="require(`@/assets/${image}`)"
        ></v-img>
      </div>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'CardRestaurant',
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
      if (this.$route.name === 'search-rest-2') params.establishmentType = this.name
      if (this.$route.name === 'search-rest-3') params.price = this.name
      if (this.$route.name === 'search-rest-4') params.cuisine = this.name

      return { ...this.$route.params, ...params }
    },
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 200px) and (max-device-width: 600px) {
  #title-name {
    font-size: 14px;
    word-break: normal;
    white-space: nowrap;
  }
}
</style>