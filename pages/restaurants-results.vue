<template>
  <v-container fluid class="results">
    <v-row v-if="restaurants.length === 0">
      <v-col class="d-flex">
        <h2 v-if="$vuetify.breakpoint.smAndDown">
          No se encontraron resultados
        </h2>
        <h1 v-else>No se han encontrado resultados para tu búsqueda</h1>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-if="restaurants.length > 1">
        <h1>{{ restaurants.length }} Sitios encontrados!</h1>
      </v-col>
      <v-col v-else>
        <h1 style="text-align: center">
          {{ restaurants.length }} Sitio encontrado!
        </h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(restaurant, idx) in restaurants"
        id="card"
        :key="idx"
        class="d-flex justify-center"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <CardPlaceMobile
          v-if="$vuetify.breakpoint.xs"
          :place="restaurant"
          style="width: 100%"
        />
        <CardPlace v-else :place="restaurant" />
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
</style>