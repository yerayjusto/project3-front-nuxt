<template>
  <v-container fluid class="details">
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{place.name}}
    </v-card-title>

    <v-card-subtitle>
      {{place.island}} - {{place.municipality}}
    </v-card-subtitle>
    <v-card-text>
      <b>Descripción:</b> <br>{{place.description}}<br> <br>
      <b>Ocupación:</b> {{place.placeId.occupation}} <br> <br>
      <b>Oleaje:</b> {{place.placeId.surge}}
    </v-card-text>


    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Servicios
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-icon>mdi-magnify</v-icon>
          <v-icon>mdi-parking</v-icon>
          <v-icon>mdi-wc</v-icon>

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
  }
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