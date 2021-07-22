<template>
  <v-container fluid class="restaurants">
    <v-row>
      <v-col
        v-for="(restaurant, idx) in restaurants"
        :key="idx"
        class="d-flex justify-center pa-xs-0"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <CardPlaceMobile v-if="$vuetify.breakpoint.xs" :place="restaurant" style="width: 100%;"/>
        <CardPlace v-else :place="restaurant" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',
  async asyncData({ $axios, params }) {
    const restaurants = await $axios.get('/places/search', {
      params: { placeType: 'restaurants' },
    })
    return { restaurants: restaurants.data }
  },

  data() {},
}
</script>

<style scoped>
.restaurants {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>
