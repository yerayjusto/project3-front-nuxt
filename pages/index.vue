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
    <div>

    <v-row class="mt-5">
      <v-col class="d-flex justify-center">
        <p class="welcome">BIENVENID@ A LET'S GO! CANARIAS</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Seleccione el de lugar que desea buscar:</h1>
      </v-col>
    </v-row>

    <v-row class="mt-15" align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-1"
          style="text-decoration: none; color: inherit"
        >
          <v-btn class="primary" width="200" height="100"> PLAYAS </v-btn>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-1"
          style="text-decoration: none; color: inherit"
        >
          <v-btn rounded x-large color="primary" dark> RESTAURANTES </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row class="mt-15" align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-1"
          style="text-decoration: none; color: inherit"
        >
        <v-btn rounded x-large color="primary" dark> MIRADORES </v-btn>
      </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-1"
          style="text-decoration: none; color: inherit"
        >
          <v-btn rounded x-large color="primary" dark> MUSEOS </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>
    </div>
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
