<template>
  <div id="map">
    <v-btn class="btn-map" style="color:#FF9A00" :href="mapUrl" target="_blank">Como llegar</v-btn>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    coordinates: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      map: {},
    }
  },
  computed: {
    mapUrl() {
      return `https://www.google.es/maps/@${this.coordinates.x.toString()},${this.coordinates.y.toString()},19z`
    },
  },
  mounted() {
    this.createMap()
    this.createMarker()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = process.env.MAPBOX_API_KEY
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 14,
        center: [this.coordinates.y,this.coordinates.x],
      })
    },
    createMarker() {
      this.map = new mapboxgl.Marker()
        .setLngLat([this.coordinates.y,this.coordinates.x])
        .addTo(this.map)
    },
  },
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
  position: relative;
}
.btn-map{
  position: absolute;
 z-index: 2;
 right: 0;
 opacity: 80%;
}
</style>
