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
          <v-row v-if="places.length === 0">
            <v-col
              class="d-flex justify-center"
            >
              <h1>No se han encontrado resultados para tu búsqueda</h1>
            </v-col>
          </v-row>

          <v-row v-else align="center" justify="center">
            <v-col v-if="places.length > 1" justify="center">
              <h1 style="text-align: center">
                {{ places.length }} resultados encontrados!
              </h1>
            </v-col>
            <v-col v-else justify="center">
              <h1 style="text-align: center">
                {{ places.length }} resultado encontrado!
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
              v-for="(place, idx) in places"
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
              <CardPlace :place="place"/>
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
    return { places: places.data }
  },
  data() {
    return {
      panel: 0
    }
  },
   watchQuery: ["name",
                "island",
                "municipality",
                "placeType",
                "occupation",
                "urbanization",
                "sandType",
                "surge",
                "wayToAccess",
                "nudism",
                "blueFlag",
                "lifeguard",
                "disabledAccess",
                "parking",
                "showers",
                "rentalSunUmbrella",
                "rentalHamocks",
                "rentalBoats",
                "food",
                "drinks",
                "childZone",
                "sportZone",
                "scubaDiving",
                "surfZone",
                "establishmentType",
                "cuisine"],
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