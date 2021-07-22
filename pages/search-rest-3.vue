<template>
  <v-container fluid class="choose">
    <ButtonRestFilter
        v-if="params"
        :params="params"
        :restaurants="restaurants"
      />
    <v-row align="center" justify="center" class="mt-5">
      <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-rest-2' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            class="mx-2"
            fab
            dark
            small
            color="secondary"
          >
            <v-icon dark>mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-btn v-else class="secondary">ATRAS</v-btn>
        </nuxt-link>
      </v-col>

      <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-rest-4' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            class="mx-2"
            fab
            dark
            small
            color="#FF9A00"
          >
            <v-icon dark>mdi-arrow-right-bold</v-icon>
          </v-btn>
          <v-btn v-else dark color="#FF9A00"> SIGUIENTE (SALTAR) </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(cuisine, idx) in cuisines"
        :key="idx"
        class="px-lg-10"
        cols="12"
        xs="12"
        sm="4"
        md="3"
      >
        <CardRestaurantMobile
          v-if="$vuetify.breakpoint.xs"
          :image="cuisine.image"
          :name="cuisine.cuisine"
          nview="search-rest-4"
        />

        <CardRestaurant
          v-else
          :image="cuisine.image"
          :name="cuisine.cuisine"
          nview="search-rest-4"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    if (params.cuisine !== null) delete params.cuisine
    const restaurants = await $axios.get('/places/search', {
      params: { ...params },
    })
    if (params === {}) return { restaurants: restaurants.data }
    return { restaurants: restaurants.data, params }
  },
  data() {
    return {
      cuisines: [
        {
          cuisine: 'Típica Canaria',
          image: 'small-beach.jpg',
        },
        {
          cuisine: 'Mediterránea',
          image: 'medium-beach.jpg',
        },
        {
          cuisine: 'Internacional',
          image: 'large-beach.jpg',
        },
      ],
    }
  },
  methods: {
    delFilter() {
      delete this.$route.params.establishmentType
    },
  },
}
</script>

<style lang="scss" scoped>
.choose {
  width: 100%;
  height: 100%;
}
</style>