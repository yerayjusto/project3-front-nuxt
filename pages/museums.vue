<template>
  <v-container fluid class="museums">
    <v-row justify="center" align="center">
      <v-col
        v-for="(museum, idx) in museums"
        :key="idx"
        class="d-flex justify-center"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <CardPlace :place="museum" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Beaches',
  async asyncData({ $axios, params }) {
    const museums = await $axios.get('/places/search', {
      params: { placeType: 'museums' },
    })
    return { museums: museums.data }
  },

  data() {},
}
</script>
<style scoped>
.museums {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>
