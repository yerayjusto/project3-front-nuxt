<template>
  <v-container fluid fill-height class="index">
    <v-row v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" align="center" justify="center">
      <v-col class="d-flex pa-xs-0" offset="6" cols="6">
        <SignUp />
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center">
      <v-col class="d-flex justify-center pa-xs-0" cols="12">
        <SignUp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'unauthenticated'
}
</script>
<style>

.signup {
  display: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/background_index.jpg') !important;
  background-size: cover;
  background-position: center;
}
</style>