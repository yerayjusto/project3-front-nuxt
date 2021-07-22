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
          :to="{ params: { ...params }, name: 'search-rest-1' }"
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
          :to="{ params: { ...params }, name: 'search-rest-3' }"
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
        v-for="(type, idx) in types"
        :key="idx"
        class="px-lg-10"
        cols="12"
        xs="12"
        sm="4"
        md="3"
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