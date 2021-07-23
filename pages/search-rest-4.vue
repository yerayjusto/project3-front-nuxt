<template>
  <v-container fluid class="choose">
    <v-row align="center" justify="center" class="mt-5">
      <v-col class="d-flex justify-center" xs="6" sm="6" md="4" lg="4" xl="4">
        <ButtonRestFilter
          v-if="params"
          :params="params"
          :restaurants="restaurants"
        />
      </v-col>
      <v-col class="d-flex justify-center" xs="6" sm="2" md="2" lg="2" xl="2">
        <v-btn-toggle>
          <nuxt-link
            :to="{ params: { ...params }, name: 'search-rest-3' }"
            style="text-decoration: none; color: inherit"
          >
            <v-btn
              v-if="$vuetify.breakpoint.smAndDown"
              class="ma-0"
              color="secondary"
            >
              <v-icon color="white">mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-btn v-else class="me-2 secondary">VOLVER</v-btn>
          </nuxt-link>
          <nuxt-link
            :to="{ params: { ...params }, name: 'restaurants-results' }"
            style="text-decoration: none; color: inherit"
          >
            <v-btn
              v-if="$vuetify.breakpoint.smAndDown"
              class="mx-2"
              color="#FF9A00"
            >
              <v-icon color="white">mdi-arrow-right-bold</v-icon>
            </v-btn>
            <v-btn v-else dark color="#FF9A00"> SIGUIENTE </v-btn>
          </nuxt-link>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(price, idx) in prices"
        :key="idx"
        class="px-lg-10"
        cols="12"
        xs="12"
        sm="4"
        md="3"
      >
        <CardRestaurantMobile
          v-if="$vuetify.breakpoint.xs"
          :image="price.image"
          :name="price.price"
          nview="restaurants-results"
        />

        <CardRestaurant
          v-else
          :image="price.image"
          :name="price.price"
          nview="restaurants-results"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const restaurants = await $axios.get('/places/search', {
      params: { ...params },
    })
    if (params === {}) return { restaurants: restaurants.data }
    return { restaurants: restaurants.data, params }
  },
  data() {
    return {
      prices: [
        {
          price: 'Económico (<15€)',
          image: 'surge-calm.jpg',
        },
        {
          price: 'Moderado (15-25€)',
          image: 'surge-medium.jpeg',
        },
        {
          price: 'Elevado (>25€)',
          image: 'surge-hard.jpeg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>