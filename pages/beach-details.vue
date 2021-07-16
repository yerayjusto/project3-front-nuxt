<template>
  <v-container fluid class="details">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="place.imageUrl"
        height="200px"
      ></v-img>

      <v-card-title>
        {{ place.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ place.island }} - {{ place.municipality }}
      </v-card-subtitle>
      <v-card-text>
        <b>Descripción:</b> <br />{{ place.description }}<br />
        <br />
        <b>Ocupación:</b> {{ place.placeId.occupation }} <br />
        <br />
        <b>Oleaje:</b> {{ place.placeId.surge }}
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Servicios </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="d-flex aling-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.parking === 'Sí'"
                  >mdi-parking</v-icon
                >
              </template>
              <span>Aparcamiento</span>
            </v-tooltip>

            <v-tooltip botton>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.toilet === 'Sí'"
                  >mdi-toilet</v-icon
                >
              </template>
              <span>Baños</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.lifeguard === 'Sí'"
                  >mdi-lifebuoy</v-icon
                >
              </template>
              <span>Socorrista</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.seaFront === 'Sí'"
                  >mdi-walk</v-icon
                >
              </template>
              <span>Paseo marítimo</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="@/assets/nudist.png"
                  style="width: 25px; height: 25px"
                  v-show="place.placeId.nudism === 'Sí'"
                />
              </template>
              <span>Nudista</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.disabledAccess === 'Sí'"
                  >mdi-wheelchair-accessibility</v-icon
                >
              </template>
              <span>Acceso discapacitados</span>
            </v-tooltip>

             <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.blueFlag === 'Sí'">mdi-flag</v-icon>
              </template>
              <span>Bandera azul</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.shower === 'Sí'"
              >mdi-shower-head</v-icon>
              </template>
              <span>Duchas</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.trashCan === 'Sí'"
              >mdi-trash-can</v-icon>
              </template>
              <span>Papeleras</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.rentalSunUmbrella === 'Sí'"
              >mdi-beach</v-icon>
              </template>
              <span>Alquiler de sombrillas</span>
            </v-tooltip>
            
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.rentalHamocks === 'Sí'"
              >mdi-seat-flat</v-icon>
              </template>
              <span>Alquiler de hamacas</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.rentalBoats === 'Sí'">mdi-ferry</v-icon>
              </template>
              <span>Alquiler de bote a pedales</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  v-show="place.placeId.food === 'Sí'">mdi-food</v-icon>
              </template>
              <span>Establecimiento de comida</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                 v-show="place.placeId.touristOffice === 'Sí'"
              >mdi-information-variant</v-icon>
              </template>
              <span>Punto de información</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                 v-show="place.placeId.childZone === 'Sí'"
              >mdi-shovel</v-icon>
              </template>
              <span>Zona infantil</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                 v-show="place.placeId.sportZone === 'Sí'"
              >mdi-weight-lifter</v-icon>
              </template>
              <span>Zona deportiva</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                 v-show="place.placeId.scubaDiving === 'Sí'"
              >mdi-diving-scuba-tank</v-icon>
              </template>
              <span>Zona de buceo</span>
            </v-tooltip>

             <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="@/assets/surfing.png"
                  style="width: 25px; height: 25px"
                  v-show="place.placeId.zoneMarkedOut === 'No'"
                />
              </template>
               <span>Zona de surf</span> 
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="@/assets/buoy.png"
                  style="width: 20px; height: 20px"
                  v-show="place.placeId.zoneMarkedOut === 'Sí'"
                />
              </template>
              <span>Zona balizada</span>
            </v-tooltip>




           
        
            
           
            
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'beach-details',
  async asyncData({ $axios, params }) {
    const place = await $axios.get(`/places/${params.id}`)
    return { place: place.data }
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    console.log(this.place)
  },
}
</script>
<style>
.details {
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