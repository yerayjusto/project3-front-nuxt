<template>
  <v-container fluid class="index">
    <v-row class="mt-15">
      <v-col :cols="$vuetify.breakpoint.mdAndDown ? '12' : '6'">
        <h1>PLAYAS</h1>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.lgAndUp">
        <h1>TOP LUGARES</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="$vuetify.breakpoint.mdAndDown ? '12' : '6'" class="d-flex">
        <v-carousel cycle hide-delimiters show-arrows-on-hover>
          <v-carousel-item
            v-for="(beach, idx) in beaches"
            :key="idx"
            :src="beach.imageUrl"
            :to="{ query: { id: beach._id }, name: 'beach-details' }"
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
      <v-col v-if="$vuetify.breakpoint.mdAndDown" cols="12">
        <h1>TOP LUGARES</h1>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.lgAndUp ? '2' : '12'" class="d-flex">
        <CardPlaceMobile
          v-if="$vuetify.breakpoint.mdAndDown"
          :place="restaurantRate"
          style="width: 100%"
        /><CardPlace v-else :place="restaurantRate" />
      </v-col>
      <v-col :cols="$vuetify.breakpoint.lgAndUp ? '2' : '12'" class="d-flex">
        <CardPlaceMobile
          v-if="$vuetify.breakpoint.mdAndDown"
          :place="beachRate"
          style="width: 100%"
        /><CardPlace v-else :place="beachRate" />
      </v-col>
      <v-col :cols="$vuetify.breakpoint.lgAndUp ? '2' : '12'" class="d-flex">
        <CardPlaceMobile
          v-if="$vuetify.breakpoint.mdAndDown"
          :place="museumRate"
          class="mb-10"
          style="width: 100%"
        /><CardPlace v-else :place="museumRate" />
      </v-col>
    </v-row>
    <v-row> </v-row>
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
    const restaurantRate = restaurants.data.reduce((acc, i) =>
      i.rate > acc.rate ? i : acc
    )
    const beachRate = beaches.data.reduce((acc, i) =>
      i.rate > acc.rate ? i : acc
    )
    const museumRate = museums.data.reduce((acc, i) =>
      i.rate > acc.rate ? i : acc
    )

    return {
      restaurants: restaurants.data,
      restaurantRate,
      beaches: beaches.data,
      beachRate,
      museums: museums.data,
      museumRate,
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log('---------------', this.$auth.user)
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
