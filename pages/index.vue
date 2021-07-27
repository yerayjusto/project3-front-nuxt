<template>
  <v-container fluid class="index">
    <v-row>
      <v-col cols="6" class="d-flex"
        ><v-carousel cycle hide-delimiters show-arrows-on-hover>
          <v-carousel-item
            v-for="(beach, idx) in beaches"
            :key="idx"
            max-height="400"
            max-width="1000"
            :src="beach.imageUrl"
          >
            <v-row align="start" justify="start">
              <div
                v-if="$vuetify.breakpoint.mdAndUp"
                class="text-h3 amber darken-1 white--text mt-5 ms-5"
              >
                {{ beach.name }}
              </div>
              <div v-else class="text-h5 amber darken-1 white--text mt-5 ms-5">
                {{ beach.name }}
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6" class="d-flex">
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    const restaurants = await $axios.get('/places/search', {
      params: { placeType: 'restaurants' },
    })
    const beaches = await $axios.get('/places/search', {
      params: { placeType: 'beaches' },
    })
    const museums = await $axios.get('/places/search', {
      params: { placeType: 'museums' },
    })
    return {
      restaurants: restaurants.data,
      beaches: beaches.data,
      museums: museums.data,
    }
  },
  data() {
    return {}
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
