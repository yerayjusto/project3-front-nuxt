<template>
  <v-container fluid class="results">
    <v-row v-if="restaurants.length === 0">
      <v-col
        class="d-flex justify-center"
        style="
          font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
            Roboto;
        "
      >
        <h1>No se han encontrado resultados para tu búsqueda</h1>
      </v-col>
    </v-row>

    <v-row v-else align="center" justify="center">
      <v-col v-if="restaurants.length > 1" justify="center">
        <h1 style="text-align: center">
          {{ restaurants.length }} Sitios encontrados!
        </h1>
      </v-col>
      <v-col v-else justify="center">
        <h1 style="text-align: center">
          {{ restaurants.length }} Sitio encontrado!
        </h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col d-flex justify="center" class="col-sm-6 col-md-4 col-lg-2">
        <nuxt-link to="/" style="text-decoration: none; color: inherit">
          <div align="center">
            <v-btn
              v-show="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
              id="btn-menu"
              style="width: auto"
              class="secondary"
              >MENU PRINCIPAL
            </v-btn>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(restaurant, idx) in restaurants"
        id="card"
        :key="idx"
        class="d-flex justify-center pa-xs-0"
        cols="6"
        xs="4"
        sm="4"
        md="4"
        lg="3"
        xl="3"
      >
        <CardPlace :place="restaurant" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Restaurants',
  async asyncData({ $axios, params }) {
    const restaurants = await $axios.get('/places/search', {
      params: { ...params },
    })
    return { restaurants: restaurants.data }
  },
}
</script>
<style>
.results {
  display: absolute;
  width: 100%;
  height: 100%;
}
@media (max-width: 600px) {
  h1 {
    font-size: 18px;
  }
}
</style>