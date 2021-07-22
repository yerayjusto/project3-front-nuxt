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
        <b>Web:</b> {{ place.placeId.web }} <br>
        <b>Teléfono:</b> {{ place.placeId.telephone }} <br>
        
      </v-card-text>
      
     </v-card>
     <div id="map-wrap" style="height: 100vh">
 <no-ssr>
   <l-map :zoom=13 :center="[55.9464418,8.1277591]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
   </l-map>
 </no-ssr>
</div>
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