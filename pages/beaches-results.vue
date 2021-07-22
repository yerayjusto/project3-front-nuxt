<template>
  <v-container fluid class="results">
    <v-row v-if="beaches.length === 0">
      <v-col class="d-flex justify-center">
        <p v-if="$vuetify.breakpoint.xs">
          {{ beaches.length }} No se han encontrado resultados para tu búsqueda
        </p>
        <h1 v-else>
          {{ beaches.length }} No se han encontrado resultados para tu búsqueda
        </h1>
      </v-col>
    </v-row>

    <v-row v-else align="center" justify="center">
      <v-col v-if="beaches.length > 1" justify="center">
        <p v-if="$vuetify.breakpoint.xs">
          {{ beaches.length }} Playas encontradas!
        </p>
        <h1 v-else>
          {{ beaches.length }} Playas encontradas!
        </h1>
      </v-col>
      <v-col v-else align="center" justify="center">
        <p v-if="$vuetify.breakpoint.xs">
          {{ beaches.length }} Playa encontrada!
        </p>
        <h1 v-else>
          {{ beaches.length }} Playa encontrada!
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
        v-for="(beach, idx) in beaches"
        id="card"
        :key="idx"
        class="d-flex justify-center pa-xs-0"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
      >
        <CardPlaceMobile v-if="$vuetify.breakpoint.xs" :place="beach" style="width: 100%;"/>
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
@media (max-width: 600px) {
  h1 {
    font-size: 18px;
  }
}
</style>