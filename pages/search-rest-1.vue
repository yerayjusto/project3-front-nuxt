<template>
  <v-container fluid class="choose">
    <v-row align="center" justify="center" class="mt-5">
      <v-col
        class="d-flex justify-center pa-xs-0"
        cols="6"
        xs="6"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <nuxt-link to="/" style="text-decoration: none; color: inherit">
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            class="mx-2"
            fab
            dark
            small
            color="secondary"
          >
            <v-icon dark>mdi-home</v-icon>
          </v-btn>
          <v-btn v-else class="secondary">MENU PRINCIPAL</v-btn>
        </nuxt-link>
      </v-col>
      <v-col
        class="d-flex justify-center pa-xs-0"
        cols="6"
        xs="6"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <nuxt-link
          :to="{ params: { placeType: 'restaurants' }, name: 'search-rest-2' }"
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
        v-for="(island, idx) in islands"
        :key="idx"
        class="px-lg-15"
        cols="12"
        xs="12"
        sm="4"
        md="3"
      >
        <CardRestaurantMobile
          v-if="$vuetify.breakpoint.xs"
          :name="island.island"
          :image="island.image"
          nview="search-rest-2"
        />
        <CardRestaurant
          v-else
          :name="island.island"
          :image="island.image"
          nview="search-rest-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      islands: [
        {
          island: 'Tenerife',
          image: 'tenerife.jpg',
        },
        {
          island: 'La Palma',
          image: 'la-palma.jpg',
        },
        {
          island: 'La Gomera',
          image: 'la-gomera.jpg',
        },
        {
          island: 'El Hierro',
          image: 'el-hierro.jpg',
        },
        {
          island: 'Gran Canaria',
          image: 'gran-canaria.jpg',
        },
        {
          island: 'Fuerteventura',
          image: 'fuerteventura.jpg',
        },
        {
          island: 'Lanzarote',
          image: 'lanzarote.jpg',
        },
        {
          island: 'La Graciosa',
          image: 'la-graciosa.jpg',
        },
      ],
    }
  },
  mounted() {
    if (this.$route.params.island !== null) delete this.$route.params.island
  },
}
</script>

<style lang="scss">
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>