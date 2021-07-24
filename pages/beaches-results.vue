<template>
  <v-container fluid pa-0 pt-2>
    <v-row class="hidden-lg-and-up" >
      <v-expansion-panels v-model="panel" accordion>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            <v-btn color="warning">
              Filtros
            </v-btn>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <AdvancedSearchFilter/>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row>
      <v-col cols="2" class="hidden-md-and-down">
        <AdvancedSearchFilter/>
      </v-col>
      <v-col cols="12" lg="10">
        <v-container fluid class="results">
          <v-row v-if="beaches.length === 0">
            <v-col
              class="d-flex justify-center"
              style="font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto;"
            >
              <h1>No se han encontrado resultados para tu búsqueda</h1>
            </v-col>
          </v-row>
          <v-row v-else align="center" justify="center">
            <v-col justify="center">
              <h1 style="text-align: center;">{{ beaches.length }} Playas encontradas!</h1>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col d-flex justify="center" class="col-sm-6 col-md-4 col-lg-2">
              <nuxt-link to="/" style="text-decoration: none; color: inherit">
              <div align="center">
                <v-btn v-show="$vuetify.breakpoint.md || $vuetify.breakpoint.lg" style="width: auto;" id="btn-menu" class="secondary"
                  >MENU PRINCIPAL
                </v-btn>
              </div>
              </nuxt-link>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col
              v-for="(beach, idx) in beaches"
              :key="idx"
              cols="12"
              class="col-sm-6 col-md-4 col-lg-3"
            >
              <CardPlace :place="beach"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',

  async asyncData({ $axios, params, query }) {
    const beaches = await $axios.get('/places/search', {
      params: { ...params, ...query},
    })
    return { beaches: beaches.data }
  },
  data() {
    return {
      panel: 0
    }
  },
   watchQuery: ["name", "island", "municipality", "placeType"],
}
</script>
<style lang="scss">
.results {
  display: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/bgletsgo3.jpg') !important;
  background-size: cover;
  background-position: center;
}
@media (max-width: 600px) {
h1 {
  font-size: 18px;
}
#btn-menu {
  width: 50px;
}
}

</style>