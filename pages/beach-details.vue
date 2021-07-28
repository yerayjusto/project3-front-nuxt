<template>
  <v-container fluid class="details">
    <v-row class="d-flex justify-center" :md="10" :xs="12">
      <v-col :lg="7" :md="6" :sm="6" :xs="12" >
        <v-card>
          <v-img :src="place.imageUrl" height="300px" width="1200px"></v-img>

          <v-card-title>
            {{ place.name }}
          </v-card-title>
          <v-rating
          length="5"

          value = 3>
            {{place.rate}}
          </v-rating>

          <v-card-subtitle>
            {{ place.island }} - {{ place.municipality }}
          </v-card-subtitle>
          <v-card-text>
            <b>Descripción:</b> <br />{{ place.description }}<br />
            <br />
            <b>Ocupación:</b> {{ place.placeId.occupation }} <br />

            <b>Oleaje:</b> {{ place.placeId.surge }} <br />

            <b>Acceso:</b> {{ place.placeId.wayToAccess }} <br />

            <b>Tipo de arena:</b> {{ place.placeId.sandType }}
             <b>Localización:</b> {{place.coordY}} , {{place.coordX}}


          </v-card-text>
          <v-card-text>
            <b>Servicios:</b>

            <v-card-text class="d-flex aling-center mr-5">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.parking === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-parking</v-icon
                  >
                </template>
                <span>Aparcamiento</span>
              </v-tooltip>

              <v-tooltip botton>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.toilet === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-toilet</v-icon
                  >
                </template>
                <span>Baños</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.lifeguard === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-lifebuoy</v-icon
                  >
                </template>
                <span>Socorrista</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.seaFront === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-walk</v-icon
                  >
                </template>
                <span>Paseo marítimo</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <img
                    v-show="place.placeId.nudism === 'Sí'"
                    src="../assets/nudist.png"
                    style="width: 24px; height: 24px"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Nudista</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.disabledAccess === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-wheelchair-accessibility</v-icon
                  >
                </template>
                <span>Acceso discapacitados</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.blueFlag === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-flag</v-icon
                  >
                </template>
                <span>Bandera azul</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.shower === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-shower-head</v-icon
                  >
                </template>
                <span>Duchas</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.trashCan === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-trash-can</v-icon
                  >
                </template>
                <span>Papeleras</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.rentalSunUmbrella === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-beach</v-icon
                  >
                </template>
                <span>Alquiler de sombrillas</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.rentalHamocks === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-seat-flat</v-icon
                  >
                </template>
                <span>Alquiler de hamacas</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.rentalBoats === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-ferry</v-icon
                  >
                </template>
                <span>Alquiler de bote a pedales</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.food === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-food</v-icon
                  >
                </template>
                <span>Establecimiento de comida</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.touristOffice === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-information-variant</v-icon
                  >
                </template>
                <span>Punto de información</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.childZone === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-shovel</v-icon
                  >
                </template>
                <span>Zona infantil</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.sportZone === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-weight-lifter</v-icon
                  >
                </template>
                <span>Zona deportiva</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.scubaDiving === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-diving-scuba-tank</v-icon
                  >
                </template>
                <span>Zona de buceo</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <img
                    v-show="place.placeId.zoneMarkedOut === 'Sí'"
                    src="@/assets/surfing.png"
                    style="width: 24px; height: 24px"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Zona de surf</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <img
                    v-show="place.placeId.zoneMarkedOut === 'Sí'"
                    src="@/assets/buoy.png"
                    style="width: 24px; height: 24px"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Zona balizada</span>
              </v-tooltip>
            </v-card-text>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="showInfo = !showInfo">+ información </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showInfo = !showInfo">
              <v-icon>{{
                showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showInfo">
              <v-divider></v-divider>

              <v-card-text class="d-flex aling-center">
                <v-card-text>
                  <b>Longitud:</b> {{ place.placeId.length }}
                  <br />
                  <b>Ancho:</b> {{ place.placeId.width }}
                  <br />
                  <b>Zona:</b> {{ place.placeId.urbanization }}
                  <br />
                  <b>Plazas de parking:</b> {{ place.placeId.parkingSlot }}
                  <br />
                  <b>Composición:</b> {{ place.placeId.composition }}
                  <br />
                  <b>Web municipal:</b> {{ place.placeId.municipalWeb }}
                </v-card-text>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col :lg="3" :md="5" :sm="5" :xs="12">
        <v-card :loading="loading" class="mx-auto" style="height: 100%">

          <div class="map-container">
            <Map :coordinates="coordinates"/>
          </div>

          <v-card-title>Comentarios</v-card-title>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const place = await $axios.get(`/places/${params.id}`)
    return {
      place: place.data,
      coordinates:{x:place.data.coordX, y:place.data.coordY}
    }
  },
  data: () => ({
    showInfo: false,
  }),
  computed: {
    mapUrl() {
      return `https://www.google.es/maps/@${this.place.coordX.toString()},${this.place.coordY.toString()},19z`
    },
  },
  mounted() {},
}
</script>
<style>
#mapid {
  height: 180px;
}
.map-container{
  height: 300px;

}

.details {
  display: absolute;
  width: 100%;
  height: 100%;
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