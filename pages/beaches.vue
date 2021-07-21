<template>
  <v-container fluid class="beaches">

    <v-row>
      <v-col
        v-for="(beach, idx) in beaches"
        :key="idx"
        class="d-flex justify-center pa-xs-0"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
      <CardPlaceMobile v-if="$vuetify.breakpoint.xs" :place="beach"/>
      <CardPlace v-else :place="beach"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',
  async asyncData({ $axios, params }) {
    const beaches = await $axios.get('/places/search', {
      params: { placeType: 'beaches' },
    })
    return { beaches: beaches.data }
  },

  data() {},
}
</script>
<style scoped>
.beaches {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>
