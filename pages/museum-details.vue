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
        <b>Dirección:</b> {{ place.placeId.adress }} <br />
        <b>Web:</b> {{ place.placeId.web }} <br />
        <b>Teléfono:</b> {{ place.placeId.telephone }} <br />
      </v-card-text>
    </v-card>

    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

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

        <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: 'museum-details',
  async asyncData({ $axios, params }) {
    const place = await $axios.get(`/places/${params.id}`)
    return { place: place.data }
  },
  data: () => ({
    show: false,
  }),
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