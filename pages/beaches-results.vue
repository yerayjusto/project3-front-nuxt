<template>
  <v-container fluid class="results">
    <v-row v-if="beaches.length === 0">
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

    <v-row v-else>
      <v-row align="center" justify="center">
        <v-col class="d-flex ml-2 col-sm-6 col-md-4 col-lg-1" cols="1">
          <nuxt-link to="/" style="text-decoration: none; color: inherit">
            <v-btn class="secondary me-5" width="300" height="50"
              >MENU PRINCIPAL</v-btn
            >
          </nuxt-link>
        </v-col>
      </v-row>
      <v-col
        class="d-flex justify-center col-sm-6 col-md-4 col-lg-1"
        cols="11"
        style="
          font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
            Roboto;
        "
      >
        <h1>{{ beaches.length }} Playas encontradas!</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="(beach, idx) in beaches"
        :key="idx"
      >
        <CardPlace :place="beach" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',
  async asyncData({ $axios, $route }) {
    const beaches = await $axios.get('/places/beaches/search', { params: { ...$route.params } })
    return { beaches }
  }
}
</script>