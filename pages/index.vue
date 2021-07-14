<template>
  <v-container fluid fill-height class="places">
    <!-- <v-row style="height: 100%; margin: 0 0;" v-if="!token" align="center">
      <v-col>
        <v-tabs centered class="form">
          <v-tab> Entrar </v-tab>
          <v-tab-item class="pa-5">
            <Login/>
          </v-tab-item>
          <v-tab> Registrarse </v-tab>
          <v-tab-item class="pa-5">
            <SignUp/>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {};
</script>
<style lang="scss">
.places {
  display: absolute;
  background: url('../assets/bgletsgo3.jpg') !important;
  background-size:cover;
  background-position:center;
}
.welcome {
  font-size: 50px;
}
</style>
