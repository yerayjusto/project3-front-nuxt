<template>
  <v-container fluid class="beaches">
    <v-row justify="center" align="center">
      <v-col
        v-for="(beach, idx) in beaches"
        :key="idx"
        class="d-flex justify-center"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <CardPlaceMobile
          v-if="$vuetify.breakpoint.xs"
          :place="beach"
          style="width: 100%"
        />
        <CardPlace v-else :place="beach" />
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
