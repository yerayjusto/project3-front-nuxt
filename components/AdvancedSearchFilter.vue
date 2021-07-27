<template>
  <v-container fluid>
    <v-row>
      <v-col class="py-0">
        <v-text-field
          v-model="name"
          label="Nombre"
          clearable
          outlined
          dense
          @change="
            $router.push({ query: { ...query }, name: 'places-results' })
          "
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-select
          v-model="islandFilter"
          :items="islands"
          clearable
          outlined
          dense
          label="Isla"
          @change="
            () => {
              if (this.islandFilter === null) this.municipalityFilter = null
              this.$router.replace({ query })
            }
          "
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="hidden-md-and-down">
      <v-col class="py-0">
        <v-autocomplete
          v-model="municipalityFilter"
          :items="municipality"
          clearable
          outlined
          dense
          label="Municipio"
          @change="$router.replace({ query })"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row class="hidden-lg-and-up">
      <v-col class="py-0">
        <v-select
          v-model="municipalityFilter"
          :items="municipality"
          clearable
          outlined
          dense
          label="Municipio"
          @change="$router.replace({ query })"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-select
          v-model="placeFilter"
          :items="placeTypes"
          clearable
          outlined
          dense
          label="Tipo de lugar"
          @change="$router.replace({ query })"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider v-show="getFilterValues.placeType !== null"></v-divider>
    <div v-show="getFilterValues.placeType === 'Playas'" class="mt-7">
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="occupationFilter"
            :items="occupationGrade"
            clearable
            outlined
            dense
            label="Grado de ocupación"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="urbanizationFilter"
            :items="urbanizationGrade"
            clearable
            outlined
            dense
            label="Grado de urbanización"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="sandTypeFilter"
            :items="sandTypes"
            clearable
            outlined
            dense
            label="Tipo de playa"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="surgeFilter"
            :items="surgeTypes"
            clearable
            outlined
            dense
            label="Oleaje"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="accessTypeFilter"
            :items="accessTypes"
            clearable
            outlined
            dense
            label="Tipos de acceso"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-expansion-panels>
    <v-expansion-panel>
        <v-expansion-panel-header style="background-color: #FF9A00;"><h4 style="text-align:center; color: white;">FILTROS AVANZADOS</h4></v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-row>
        <v-col class="d-flex ms-2 py-0 mt-5">
          <v-switch
            label="Bandera azul"
            inset
            :color="blueFlagFilter ? 'primary' : 'normal'"
            @click="
              () => {
                blueFlagFilter = !blueFlagFilter
                $router.replace({ query })
              }
            "
          >

          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Socorrista"
            inset
            :color="lifeguardFilter ? 'primary' : 'normal'"
            @click="
              () => {
                lifeguardFilter = !lifeguardFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            inset
            label="Accesibilidad"
            :color="disabledAccessFilter ? 'primary' : 'normal'"
            @click="
              () => {
                disabledAccessFilter = !disabledAccessFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Parking"
            inset
            :color="parkingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                parkingFilter = !parkingFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Duchas"
            inset
            :color="showerFilter ? 'primary' : 'normal'"
            @click="
              () => {
                showerFilter = !showerFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Playa nudista"
            inset
            :color="nudismFilter ? 'primary' : 'normal'"
            @click="
              () => {
                nudismFilter = !nudismFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Alquiler Sombrilla"
            inset
            :color="rentalSunUmbrellaFilter ? 'primary' : 'normal'"
            @click="
              () => {
                rentalSunUmbrellaFilter = !rentalSunUmbrellaFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
          label="Alquiler tumbona"
            inset
            :color="rentalHamocksFilter ? 'primary' : 'normal'"
            @click="
              () => {
                rentalHamocksFilter = !rentalHamocksFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Alquiler botes"
            inset
            :color="rentalBoatsFilter ? 'primary' : 'normal'"
            @click="
              () => {
                rentalBoatsFilter = !rentalBoatsFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Venta comida"
            inset
            :color="foodFilter ? 'primary' : 'normal'"
            @click="
              () => {
                foodFilter = !foodFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Venta bebida"
            inset
            :color="drinksFilter ? 'primary' : 'normal'"
            @click="
              () => {
                drinksFilter = !drinksFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Zona infantil"
            inset
            :color="childZoneFilter ? 'primary' : 'normal'"
            @click="
              () => {
                childZoneFilter = !childZoneFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Zona deportiva"
            inset
            :color="sportZoneFilter ? 'primary' : 'normal'"
            @click="
              () => {
                sportZoneFilter = !sportZoneFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Submarinismo"
            inset
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >

          </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ms-2 py-0">
          <v-switch
            label="Surf"
            inset
            :color="surfZoneFilter ? 'primary' : 'normal'"
            @click="
              () => {
                surfZoneFilter = !surfZoneFilter
                $router.replace({ query })
              }
            "
          >
          </v-switch>
        </v-col>
      </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>

    </div>
    <div v-show="getFilterValues.placeType === 'Restaurantes'" class="mt-7">
      <v-row>
        <v-col class="py-0">
          <v-text-field
            v-model="name"
            label="Platos"
            clearable
            outlined
            dense
            @change="
              $router.push({ query: { ...query }, name: 'places-results' })
            "
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="establishmentFilter"
            :items="establishmentTypes"
            clearable
            outlined
            dense
            label="Tipo de establecimiento"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="cuisineFilter"
            :items="cuisineTypes"
            clearable
            outlined
            dense
            label="Tipo de comida"
            @change="$router.replace({ query })"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="accessTypeFilter"
            :items="accessTypes"
            clearable
            outlined
            dense
            label="Especialidad"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="accessTypeFilter"
            :items="accessTypes"
            clearable
            outlined
            dense
            label="Servicio"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-select
            v-model="accessTypeFilter"
            :items="accessTypes"
            clearable
            outlined
            dense
            label="Precio"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Parking
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Acceso
            <v-icon color="grey darken-2">mdi-wheelchair-accessibility</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Baño minusválido
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Aceptan mascota
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Menú del día
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Opción vegana
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Opción vegetariana
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="1"
            :color="scubaDivingFilter ? 'primary' : 'normal'"
            @click="
              () => {
                scubaDivingFilter = !scubaDivingFilter
                $router.replace({ query })
              }
            "
          >
            Menú sin gluten
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: null,
    islandFilter: null,
    municipalityFilter: null,
    placeFilter: null,
    occupationFilter: null,
    urbanizationFilter: null,
    sandTypeFilter: null,
    surgeFilter: null,
    accessTypeFilter: null,
    nudismFilter: null,
    blueFlagFilter: null,
    lifeguardFilter: null,
    disabledAccessFilter: null,
    parkingFilter: null,
    showerFilter: null,
    rentalSunUmbrellaFilter: null,
    rentalHamocksFilter: null,
    rentalBoatsFilter: null,
    foodFilter: null,
    drinksFilter: null,
    childZoneFilter: null,
    sportZoneFilter: null,
    scubaDivingFilter: null,
    surfZoneFilter: null,
    islands: [
      'El Hierro',
      'Fuerteventura',
      'Gran Canaria',
      'La Gomera',
      'La Palma',
      'Lanzarote',
      'Tenerife',
    ],
    placeTypes: ['Playas', 'Restaurantes', 'Museos', 'Miradores'],
    occupationGrade: ['Alto', 'Medio', 'Bajo'],
    urbanizationGrade: ['Urbana', 'Semiurbana', 'Aislada'],
    sandTypes: ['Arena negra', 'Arena blanca', 'Piedras'],
    surgeTypes: ['Oleaje fuerte', 'Oleaje moderado', 'Aguas tranquilas'],
    accessTypes: ['A pie fácil', 'A pie dificil', 'Coche', 'Barco'],
    establishmentFilter: null,
    cuisineFilter: null,
    establishmentTypes: ['Bar/Cafetería', 'Restaurante', 'Guanchinche'],
    cuisineTypes: ['Típica Canaria', 'Mediterránea', 'Internacional'],
  }),
  computed: {
    municipality() {
      if (this.islandFilter) {
        switch (this.islandFilter) {
          case 'El Hierro':
            return ['Frontera', 'Valverde', 'El Pinar de El Hierro']
          case 'Fuerteventura':
            return [
              'Antigua',
              'Betancuria',
              'La Oliva',
              'Pájara',
              'Puerto del Rosario',
              'Tuineje',
            ]
          case 'Gran Canaria':
            return [
              'Agaete',
              'Agüimes',
              'Artenara',
              'Arucas',
              'Firgas',
              'Gáldar',
              'Ingenio',
              'Mogán',
              'Moya',
              'Las Palmas de Gran Canaria',
              'San Bartolomé de Tirajana',
              'La Aldea de San Nicolás',
              'Santa Brígida',
              'Santa Lucía de Tirajana',
              'Santa María de Guía',
              'Tejeda',
              'Telde',
              'Teror',
              'Valsequillo',
              'Valleseco',
              'Vega de San Mateo',
            ]
          case 'La Gomera':
            return [
              'Agulo',
              'Alajeró',
              'Hermigua',
              'San Sebastián de La Gomera',
              'Valle Gran Rey',
              'Vallehermoso',
            ]
          case 'La Palma':
            return [
              'Barlovento',
              'Breña Alta',
              'Breña Baja',
              'Fuencaliente de la Palma',
              'Garafía',
              'Los Llanos de Aridane',
              'El Paso',
              'Puntagorda',
              'Puntallana',
              'San Andrés y Sauces',
              'Santa Cruz de La Palma',
              'Tazacorte',
              'Tijarafe',
              'Villa de Mazo',
            ]
          case 'Lanzarote':
            return [
              'Arrecife',
              'Haría',
              'San Bartolomé',
              'Teguise',
              'Tías',
              'Tinajo',
              'Yaiza',
            ]
          case 'Tenerife':
            return [
              'Adeje',
              'Arafo',
              'Arico',
              'Arona',
              'Buenavista del Norte',
              'Candelaria',
              'Fasnia',
              'Garachico',
              'Granadilla de Abona',
              'La Guancha',
              'Guía de Isora',
              'Güimar',
              'Icod de Los Vinos',
              'San Cristóbal de La Laguna',
              'La Matanza de Acentejo',
              'La Orotava',
              'Puerto de La Cruz',
              'Los Realejos',
              'El Rosario',
              'San Juan de La Rambla',
              'San Miguel de Abona',
              'Santa Cruz de Tenerife',
              'Santa Úrsula',
              'Santiago del Teide',
              'El Sauzal',
              'Los Silos',
              'Tacoronte',
              'El Tanque',
              'Tegueste',
              'La Victoria de Acentejo',
              'Vilaflor',
            ]
        }
      }
      return []
    },
    query() {
      const query = {}
      if (this.name !== null && this.name !== '') query.name = this.name
      if (this.islandFilter !== null) {
        query.island = this.islandFilter
        if (this.municipalityFilter !== null)
          query.municipality = this.municipalityFilter
      }
      if (this.placeFilter !== null) {
        if (this.placeFilter === 'Playas') {
          query.placeType = 'beaches'
          if (this.occupationFilter !== null)
            query.occupation = this.occupationFilter
          if (this.urbanizationFilter !== null)
            query.urbanization = this.urbanizationFilter
          if (this.sandTypeFilter !== null) query.sandType = this.sandTypeFilter
          if (this.surgeFilter !== null) query.surge = this.surgeFilter
          if (this.accessTypeFilter !== null)
            query.wayToAccess = this.accessTypeFilter
          if (this.nudismFilter) query.nudism = 'Sí'
          if (this.blueFlagFilter) query.blueFlag = 'Sí'
          if (this.lifeguardFilter) query.lifeguard = 'Sí'
          if (this.disabledAccessFilter) query.disabledAccess = 'Sí'
          if (this.parkingFilter) query.parking = 'Sí'
          if (this.showerFilter) query.showers = 'Sí'
          if (this.rentalSunUmbrellaFilter)
            query.rentalSunUmbrella = 'Sí'
          if (this.rentalHamocksFilter) query.rentalHamocks = 'Sí'
          if (this.rentalBoatsFilter) query.rentalBoats = 'Sí'
          if (this.foodFilter) query.food = 'Sí'
          if (this.drinksFilter) query.drinks = 'Sí'
          if (this.childZoneFilter) query.childZone = 'Sí'
          if (this.sportZoneFilter) query.sportZone = 'Sí'
          if (this.scubaDivingFilter) query.scubaDiving = 'Sí'
          if (this.surfZoneFilter) query.surfZone = 'Sí'
        }
        if (this.placeFilter === 'Restaurantes') {
          query.placeType = 'restaurants'
          if (this.establishmentFilter !== null)
            query.establishmentType = this.establishmentFilter
          if (this.cuisineFilter !== null) query.cuisine = this.cuisineFilter
        }
        if (this.placeFilter === 'Museos') query.placeType = 'museums'
        if (this.placeFilter === 'Miradores') query.placeType = 'viewpoints'
      }
      return query
    },
    getFilterValues() {
          const filters = {}
          if (this.$route.query.placeType === 'beaches') filters.placeType = 'Playas'
          if (this.$route.query.placeType === 'museums') filters.placeType = 'Museos'
          if (this.$route.query.placeType === 'restaurants') filters.placeType = 'Restaurantes'

          return filters
      }
  },
  mounted() {
    this.name = this.$route.query.name
    this.islandFilter = this.$route.query.island
    if (this.$route.query.placeType !== null) {
      if (this.$route.query.placeType === 'beaches') {
        this.placeFilter = 'Playas'
        this.occupationFilter = this.$route.query.occupation
        this.urbanizationFilter = this.$route.query.urbanization
        this.sandTypeFilter = this.$route.query.sandType
        this.surgeFilter = this.$route.query.surge
        this.accessTypeFilter = this.$route.query.wayToAccess
        if (this.$route.query.nudism === 'Sí') this.nudismFilter = true
        if (this.$route.query.blueFlag === 'Sí') this.blueFlagFilter = true
        if (this.$route.query.lifeguard === 'Sí') this.lifeguardFilter = true
        if (this.$route.query.disabledAccess === 'Sí')
          this.disabledAccessFilter = true
        if (this.$route.query.parking === 'Sí') this.parkingFilter = true
        if (this.$route.query.showers === 'Sí') this.showerFilter = true
        if (this.$route.query.rentalSunUmbrella === 'Sí')
          this.rentalSunUmbrellaFilter = true
        if (this.$route.query.rentalHamocks === 'Sí')
          this.rentalHamocksFilter = true
        if (this.$route.query.rentalBoats === 'Sí')
          this.rentalBoatsFilter = true
        if (this.$route.query.food === 'Sí') this.foodFilter = true
        if (this.$route.query.drinks === 'Sí') this.drinksFilter = true
        if (this.$route.query.childZone === 'Sí') this.childZoneFilter = true
        if (this.$route.query.sportZone === 'Sí') this.sportZoneFilter = true
        if (this.$route.query.scubaDiving === 'Sí')
          this.scubaDivingFilter = true
        if (this.$route.query.surfZone === 'Sí') this.surfZoneFilter = true
      }
      if (this.$route.query.placeType === 'restaurants') {
        this.placeFilter = 'Restaurantes'
        this.establishmentFilter = this.$route.query.establishmentType
        this.cuisineFilter = this.$route.query.cuisine
      }
      if (this.$route.query.placeType === 'museums') this.placeFilter = 'Museos'
      if (this.$route.query.placeType === 'viewpoints')
        this.placeFilter = 'Miradores'
    }
  },
}
</script>