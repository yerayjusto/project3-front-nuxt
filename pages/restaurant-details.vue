<template>
  <v-container fluid fill-height class="details">
    <v-row class="d-flex justify-center" :md="10" :xs="12">
      <v-col :lg="7" :md="6" :sm="6" :xs="12">
        <v-card class="mx-auto">
          <v-img :src="place.imageUrl" height="300px" width="1200px"></v-img>

          <v-card-title>
            {{ place.name }}
          </v-card-title>
          <v-rating
            length="5"
            readonly
            background-color="#FF9A00"
            color="#FF9A00"
            :value="place.rate"
          >
          </v-rating>

          <v-card-subtitle>
            {{ place.island }} - {{ place.municipality }}
          </v-card-subtitle>
          <v-card-text>
            <b>Descripción:</b> <br />{{ place.description }}<br />
            <br />
            <b>Tipo de establecimiento:</b> {{ place.placeId.establishmentType
            }}<br />
            <b>Precio:</b> {{ place.placeId.price }} <br />
            <b>Especialidad:</b> {{ place.placeId.specialty }} <br />
            <b>Teléfono:</b> {{ place.placeId.telephone }} <br />
            <b>Horario:</b> {{ place.placeId.schedule }}
          </v-card-text>
          <v-card-text>
            <b>Servicios:</b>

            <v-card-text class="d-flex aling-center">
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
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.petFriendly === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-dog-side</v-icon
                  >
                </template>
                <span>Aceptan mascotas</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <img
                    v-show="place.placeId.disabledBath === 'Sí'"
                    src="../assets/disabled-toilet.png"
                    style="width: 24px; height: 24px"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Baño adaptado</span>
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
                    v-show="place.placeId.vegetarianOption === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-sprout</v-icon
                  >
                </template>
                <span>Opción vegetariana</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.veganOption === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-vimeo</v-icon
                  >
                </template>
                <span>Opción vegana</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <img
                    v-show="place.placeId.glutenFree === 'Sí'"
                    src="../assets/gluten-free.png"
                    style="width: 24px; height: 24px"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Platos sin gluten</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon
                    v-show="place.placeId.dayMenu === 'Sí'"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-silverware-fork-knife</v-icon
                  >
                </template>
                <span>Menú del día</span>
              </v-tooltip>
            </v-card-text>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="show = !show"
              >+ información
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text class="d-flex aling-center">
                <v-card-text>
                  <b>Tipo de instalaciones:</b>
                  {{ place.placeId.installationFeatures }}
                  <br />
                  <b>web:</b> {{ place.placeId.web }}
                  <br />
                  <b>Dirección:</b> {{ place.placeId.address }}
                  <br />
                  <b>Servicio de comidas:</b>
                  <div
                    v-for="(meal, idx) in place.placeId.meals"
                    :key="idx"
                    style="display: inline"
                  >
                    <v-chip> {{ meal }} </v-chip>
                  </div>
                  <br />
                  <b>Platos:</b>
                  <div
                    v-for="(menu, idx) in place.placeId.menu"
                    :key="idx"
                    style="display: inline"
                  >
                    <v-chip> {{ menu }} </v-chip>
                  </div>
                  <br />
                </v-card-text>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col :lg="3" :md="5" :sm="5" :xs="12">
        <v-card :loading="loading" class="mx-auto" style="height: 100%">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <div class="map-container">
            <Map :coordinates="coordinates" />
          </div>

          <v-card-title>Comentarios</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'restaurant-details',
  async asyncData({ $axios, query }) {
    const place = await $axios.get(`/places/${query.id}`)
    return {
      place: place.data,
      coordinates: { x: place.data.coordX, y: place.data.coordY },
    }
  },
  data: () => ({
    show: false,
  }),
  computed: {
    mapUrl() {
      return `https://www.google.es/maps/@${this.place.coordX},${this.place.coordY}`
    },
  },
  mounted() {},
}
</script>
<style>
.map-container {
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
