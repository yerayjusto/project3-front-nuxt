<template>
  <v-container fluid pa-0 pt-2>
    <v-row class="hidden-lg-and-up">
      <v-expansion-panels v-model="panel" accordion>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            <v-btn color="#FF9A00"><h3 style="color: white;">FILTROS</h3> </v-btn>
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
          <v-row  class="ms-3" v-if="places.length === 0">
            <v-col class="d-flex">
              <h2 v-if="$vuetify.breakpoint.smAndDown">
                No se encontraron resultados
              </h2>
              <h1 v-else>No se han encontrado resultados para tu búsqueda</h1>
            </v-col>
          </v-row>

          <v-row class="ms-3" v-else>
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
          <v-row align="center" justify="center">
            <v-col
              v-for="(place, idx) in places"
              id="card"
              :key="idx"
              class="d-flex justify-center"
              xs="12"
              sm="6"
              md="4"
              lg="4"
              xl="3"
            >
              <CardPlaceMobile
                v-if="$vuetify.breakpoint.xs"
                :place="place"
                style="width: 100%"
              />
              <CardPlace @input="updateFavs" v-else :place="place" :favs="favs" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Places',

  async asyncData({ $axios, query }) {
    const places = await $axios.get('/places/search', {
      params: { ...query },
    })
    return { places: places.data, query: { ...query } }
  },
  data() {
    return {
      panel: 0,
      favs: ''
    }
  },
  mounted() {
    this.favs = localStorage.getItem('favs')
  },
  methods: {
    updateFavs(){
      this.favs = localStorage.getItem('favs')
    }
  },
  watchQuery: [
    'name',
    'island',
    'municipality',
    'placeType',
    'occupation',
    'urbanization',
    'sandType',
    'surge',
    'wayToAccess',
    'nudism',
    'blueFlag',
    'lifeguard',
    'disabledAccess',
    'parking',
    'showers',
    'rentalSunUmbrella',
    'rentalHamocks',
    'rentalBoats',
    'food',
    'drinks',
    'childZone',
    'sportZone',
    'scubaDiving',
    'surfZone',
    'establishmentType',
    'cuisine',
  ],
}
</script>
<style lang="scss">
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