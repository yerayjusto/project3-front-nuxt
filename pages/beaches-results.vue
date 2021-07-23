<template>
  <v-container fluid class="results">
    <v-row v-if="beaches.length === 0">
      <v-col class="d-flex">
        <h2 v-if="$vuetify.breakpoint.smAndDown">
          No se encontraron resultados
        </h2>
        <h1 v-else>No se han encontrado resultados para tu búsqueda</h1>
      </v-col>
    </v-row>

    <v-row v-else align="center" justify="center">
      <v-col v-if="beaches.length > 1">
        <h2 v-if="$vuetify.breakpoint.smAndDown">
          {{ beaches.length }} Playas encontradas!
        </h2>
        <h1 v-else>{{ beaches.length }} Playas encontradas!</h1>
      </v-col>
      <v-col v-else>
        <h2 v-if="$vuetify.breakpoint.xs">
          {{ beaches.length }} Playa encontrada!
        </h2>
        <h1 v-else>{{ beaches.length }} Playa encontrada!</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(beach, idx) in beaches"
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
          :place="beach"
          style="width: 100%"
        />
        <CardPlace v-else :place="beach" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',
  async asyncData({ $axios, params, query }) {
    const beaches = await $axios.get('/places/search', {
      params: { ...query, ...params },
    })
    return { beaches: beaches.data }
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