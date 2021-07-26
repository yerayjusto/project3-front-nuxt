<template>
  <v-container fluid class="results">
    <v-row v-if="places.length === 0">
      <v-col class="d-flex">
        <h2 v-if="$vuetify.breakpoint.smAndDown">
          No se encontraron resultados
        </h2>
        <h1 v-else>No se han encontrado resultados para tu búsqueda</h1>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-if="places.length > 1">
        <h2 v-if="$vuetify.breakpoint.smAndDown">
          {{ places.length }} Sitios encontrados!
        </h2>
        <h1 v-else>{{ places.length }} Sitios encontrados!</h1>
      </v-col>
      <v-col v-else>
        <h2 v-if="$vuetify.breakpoint.xs">
          {{ places.length }} Sitio encontrado!
        </h2>
        <h1 v-else>{{ places.length }} Sitio encontrado!</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mt-5">
      <v-col
        v-for="(place, idx) in places"
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
          :place="place"
          style="width: 100%"
        />
        <CardPlace v-else :place="place" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Places',
  async asyncData({ $axios, params, query }) {
    const places = await $axios.get('/places/search', {
      params: { ...query, ...params },
    })
    return { places: places.data }
  },
  watchQuery: ['name'],
}
</script>
<style>
.results {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>