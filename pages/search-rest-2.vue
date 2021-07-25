<template>
  <v-container fluid class="choose">
    <v-row align="center" justify="center" class="mt-5">
        <ButtonRestFilter
          v-if="params"
          :params="params"
          :restaurants="restaurants"
        />
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end px-lg-15" xs="6" sm="4">
        <v-btn-toggle>
          <nuxt-link
            :to="{ params: { ...params }, name: 'search-rest-1' }"
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
            :to="{ params: { ...params }, name: 'search-rest-3' }"
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
        v-for="(type, idx) in types"
        :key="idx"
        class="px-lg-15"
        xs="12"
        sm="4"
      >
        <CardRestaurantMobile
          v-if="$vuetify.breakpoint.xs"
          :image="type.image"
          :name="type.establishmentType"
          nview="search-rest-3"
        />

        <CardRestaurant
          v-else
          :image="type.image"
          :name="type.establishmentType"
          nview="search-rest-3"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    if (params.establishmentType !== null) delete params.establishmentType
    const restaurants = await $axios.get('/places/search', {
      params: { ...params },
    })
    return { restaurants: restaurants.data, params }
  },
  data() {
    return {
      types: [
        {
          establishmentType: 'Bar/Cafetería',
          image: 'cheap.png',
        },
        {
          establishmentType: 'Restaurante',
          image: 'black-sand.jpg',
        },
        {
          establishmentType: 'Guachinche',
          image: 'white-sand.jpg',
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