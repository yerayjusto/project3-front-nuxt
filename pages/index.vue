<template>
  <v-container fluid fill-height class="places">
    <v-row align="center"
      justify="center">
      <v-col
      class="d-flex justify-center pa-xs-0"
        cols="12">
        <Login/>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
<style lang="scss">
.places {
  display: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/bgletsgo3.jpg') !important;
  background-size: cover;
  background-position: center;
}
.welcome {
  font-size: 50px;
}
</style>
