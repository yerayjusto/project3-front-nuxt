<template>
  <v-container fluid class="details">
    <v-row>
      <v-spacer></v-spacer>
      <v-col :lg="7" :md="6" :sm="6" :xs="12">
        <v-card class="mx-auto">
          <v-img :src="place.imageUrl" height="600px" width="1400px"></v-img>

          <v-card-title>
            {{ place.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ place.island }} - {{ place.municipality }}
          </v-card-subtitle>
          <v-card-text>
            <b>Descripción:</b> <br />{{ place.description }}<br />
            <br />
            <b>Localización:</b> {{ place.coordY}} , {{place.coordX}} <br />

          </v-card-text>
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

          <v-card-title>Comentarios</v-card-title>
          <v-card-subtitle>
            Fuí y la comida estaba bien pero me parecio un poco caro.
          </v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
          </v-card-text>
          <v-card-subtitle>
            A mi me gusto el trato fueron buena gente y me invitaron a un
            chupito.
          </v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
          </v-card-text>
          <v-card-subtitle>
            Lo mejor que tienen es el pavo estilo thai con soja, tienen que
            probarlo.
          </v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0" style="height: 50%">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="show1 = !show1"
              >+ Comentarios
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text class="d-flex aling-center">
                <v-card-text> </v-card-text>
              </v-card-text>
            </div>
          </v-expand-transition>

          <a :href="mapUrl" target="_blank">
            <v-img :src="require('../assets/google-maps-new-logo.jpg')"></v-img>
          </a>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'viewpoint-details',
  async asyncData({ $axios, params }) {
    const place = await $axios.get(`/places/${params.id}`)
    return { place: place.data }
  },
  data: () => ({
    show: false,
    show1: false,
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
#mapid {
  height: 180px;
}

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