<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data() {
    return {
      access_token: process.env.MAPBOX_API_KEY,
      map: {},
      coordX: 28.2068,
      coordY: -16.8346,
    }
  },
  mounted() {
    this.createMap()
    this.createMarker()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken =process.env.MAPBOX_API_KEY
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 19,
        center: [28.2068, -16.8346],
      })
    },
    createMarker() {
      this.map= new mapboxgl.Marker().setLngLat([28.2068, -16.8346]).addTo(this.map)
    },
  },
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
