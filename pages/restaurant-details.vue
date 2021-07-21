<template>
  <v-container fluid class="details">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="place.imageUrl" height="200px"></v-img>

      <v-card-title>
        {{ place.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ place.island }} - {{ place.municipality }}
      </v-card-subtitle>
      <v-card-text>
        <b>Descripción:</b> <br />{{ place.description }}<br />
        <br />
        <b>Tipo de establecimiento:</b> {{ place.placeId.establishmentType }}<br />
        <b>Precio:</b> {{ place.placeId.price }} <br />
        <b>Especialidad:</b> {{ place.placeId.specialty }} <br />
        <b>Teléfono:</b> {{ place.placeId.telephone }}  <br>
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
                >mdi-dog</v-icon
              >
            </template>
            <span>Aceptan mascotas</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <img
                v-show="place.placeId.disableBath === 'Sí'"
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
                v-show="place.placeId.vegeterianOption === 'Sí'"
                v-bind="attrs"
                v-on="on"
                >mdi-flag</v-icon
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
                >mdi-shower-head</v-icon
              >
            </template>
            <span>Opción vegana</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                v-show="place.placeId.glutenFree === 'Sí'"
                v-bind="attrs"
                v-on="on"
                >mdi-trash-can</v-icon
              >
            </template>
            <span>Platos sin gluten</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                v-show="place.placeId.dayMenu === 'Sí'"
                v-bind="attrs"
                v-on="on"
                >mdi-food</v-icon
              >
            </template>
            <span>Menú del día</span>
          </v-tooltip>

        </v-card-text>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>+ información </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <b>Servicio de comidas:</b> {{ place.placeId.meals }}
              <br />
              <b>Platos:</b> {{ place.placeId.menu }}
              <br />
            </v-card-text>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'restaurant-details',
  async asyncData({ $axios, params }) {
    const place = await $axios.get(`/places/${params.id}`)
    return { place: place.data }
  },
  data: () => ({
    show: false,
  }),
  mounted() {

  },
}
</script>
<style>
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