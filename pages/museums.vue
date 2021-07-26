<template>
  <v-container fluid class="museums">
    <v-row>
      <v-col
        v-for="(museum, idx) in museums"
        :key="idx"
        class="d-flex justify-center pa-xs-0"
        cols="6"
        xs="4"
        sm="4"
        md="4"
        lg="3"
        xl="3"
      >
      <nuxt-link
           :to="{ params: { ...params }, name: 'museum-details' }"
          style="text-decoration: none; color: inherit"
        >

        <CardPlace :place="museum" />
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'museums',
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
