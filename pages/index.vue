<template>
  <v-container fluid fill-height class="index">
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
  async asyncData({ $axios }) {
    const restaurants = await $axios.get('/places/search', {
      params: { _limit: 10, placeType: 'restaurants' },
    })
    const beaches = await $axios.get('/places/search', {
      params: { _limit: 2, placeType: 'beaches' },
    })
    return { restaurants: restaurants.data, beaches: beaches.data }
  },

}
</script>
<style lang="scss">
.index {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>
