<template>
  <v-container fluid class="index">
    <v-row>
      <v-col cols="6" class="d-flex"
        ><v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
          <v-carousel-item
            v-for="(beach, idx) in beaches"
            :key="idx"
            :src="beach.imageUrl"
          >
            <v-row align="start" justify="top">
              <div class="text-h2 amber darken-1 white--text mt-5 ms-10">
                {{ beach.name }}
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel></v-col
      >
      <v-col cols="6" class="d-flex"
        ><v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
          <v-carousel-item
            v-for="(restaurant, idx) in restaurants"
            :key="idx"
            :src="restaurant.imageUrl"
          >
            <v-row align="start" justify="top">
              <div class="text-h2 amber darken-1 white--text mt-5 ms-10">
                {{ restaurant.name }}
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel></v-col
      >
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
  async asyncData({ $axios }) {
    const restaurants = await $axios.get('/places/search', {
      params: { _limit: 10, placeType: 'restaurants' },
    })
    const beaches = await $axios.get('/places/search', {
      params: { _limit: 2, placeType: 'beaches' },
    })
    console.log(restaurants.data, beaches.data)

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
